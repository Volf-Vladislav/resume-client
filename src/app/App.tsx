import React from 'react'
import { useSelector } from 'react-redux'

import Router from './routing/Router'
import { RootState } from './redux/store'

import ChatWidget from '../widgets/ChatWidget'
import Header from '../widgets/Header'
import Menu from '../widgets/Menu'

import useLocalStorageEffect from '../shared/custom-hooks/useLocalStorageEffect'

import { ChangeSiteBackground } from '../shared/utils/changeSiteBackground'
import { setLocalStorageItem } from '../shared/custom-hooks/setLocalStorageItem'
import { isFirstVisit } from '../shared/utils/isFirstVisit'

import './styles/main.scss'


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
        <Router />
      </div>
    </div>
  )
}

export default App
