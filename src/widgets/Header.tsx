import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/redux/store'
import { flipState } from '../app/redux/UI/UISlice'

import SettingsWidget from './SettingsWidget'
import Tooltip from '../shared/components/Tooltip'

import Settings from '../shared/svg/Settings'
import Github from '../shared/svg/Github'
import Telegram from '../shared/svg/Telegram'

export default function Header() {
    const isSettingsOpen = useSelector((state: RootState) => state.UI.isSettingsOpened)
    const dispatch = useDispatch()

    const openLink = (url: string) => {
        window.open(url, '_blank', 'noreferrer')
    }

    return (
        <>
            <header>
                <div className="linkElement" onClick={() => openLink('https://github.com/Volf-Vladislav')}>
                    <Github width='30px' color='var(--iconsText)' />
                </div>
                <div className="linkElement" onClick={() => openLink('https://t.me/valentineweb')}>
                    <Telegram width='30px' color='var(--iconsText)' />
                </div>
                <div className="linkElement" id='settingsButton' onClick={() => dispatch(flipState({ type: 'settings' }))} style={isSettingsOpen ? { background: 'var(--ui)' } : {}}>
                    <Settings width='30px' color={isSettingsOpen ? 'var(--activeColor)' : 'var(--iconsText)'} />
                </div>
            </header>

            <Tooltip id='tooltip1' text='Кастомизация веб-приложения' position={['85px', 'empty', 'empty', '50px']}/>
            <Tooltip id='tooltip2' text='Онлайн чат с создателем' position={['empty', 'empty', '8px', '75px']}/>
            <Tooltip id='tooltip3' text='Открыть или свернуть меню' position={['5px', '80px', 'empty', 'empty']}/>

            {
                isSettingsOpen ? <SettingsWidget /> : <></>
            }
        </>
    )
}
