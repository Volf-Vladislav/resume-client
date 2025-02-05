import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './states/store'

import ChatWidget from './components/ChatWidget'
import Header from './components/Header'
import Menu from './components/Menu'

import MainPage from './pages/MainPage'
import SkillPage from './pages/SkillPage'
import WorksPage from './pages/WorksPage'
import ContactsPage from './pages/ContactsPage'
import SelfPage from './pages/SelfPage'
import AboutPage from './pages/AboutPage'

import SiteRoutes from './pages/SiteRoutes'
import useLocalStorageEffect from './components/hooks/useLocalStorageEffect'

import { ChangeSiteBackground } from './components/helpers/changeSiteBackground'
import { setLocalStorageItem } from './components/hooks/setLocalStorageItem'
import { isFirstVisit } from './components/helpers/isFirstVisit'

import './scss/main.scss'

const App = () => {
  const isOpen = useSelector((state: RootState) => state.UI.isMenuOpened)
  const backGroundTransperent = useSelector((state: RootState) => state.UI.backGroundTransperent)

  const changeTheme = () => {
    if (localStorage.getItem("theme") === null) setLocalStorageItem('theme', 'dark')
    else {
      const theme = localStorage.getItem("theme") || ' '
      document.body.id = theme.replaceAll('"', '')
    }
  }

  useLocalStorageEffect(() => {
    ChangeSiteBackground(`${localStorage.getItem('background')}`)
    changeTheme()
  }, [])

  React.useEffect(() => {
    ChangeSiteBackground(`${localStorage.getItem('background')}`)
    changeTheme()
    isFirstVisit()
  }, [])

  return (
    <div className='App'>
      <div className="opacityOverlay" style={{ opacity: backGroundTransperent.concat('', '%') }}></div>
      <Header />
      <Menu />
      <ChatWidget />
      <div className="pageWrapp" style={isOpen ? { marginLeft: '325px' } : { marginLeft: '115px' }}>
        <Routes >
          <Route path={SiteRoutes.main} Component={MainPage} />
          <Route path={SiteRoutes.skills} Component={SkillPage} />
          <Route path={SiteRoutes.works} Component={WorksPage} />
          <Route path={SiteRoutes.contacts} Component={ContactsPage} />
          <Route path={SiteRoutes.self} Component={SelfPage} />
          <Route path={SiteRoutes.about} Component={AboutPage} />
        </Routes >
      </div>
    </div>
  )
}

export default App
