import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../states/store'
import { flipState } from '../states/UI/UISlice'

import SettingsElement from "./templates.tsx/SettingsElement"
import SwitchButton from "./templates.tsx/SwitchButton"
import Button from "./templates.tsx/Button"
import BackgroundStyler from './BackgroundStyler'

export default function SettingsWidget() {
    const isBgStylerOpened = useSelector((state: RootState) => state.UI.isBgStylerOpened)
    const dispatch = useDispatch()

    const changeTheme = () => {

    }

    const chooseBackground = () => {
        dispatch(flipState({ type: 'bgStyler' }))
    }

    const closeSettings = () => {
        dispatch(flipState({ type: 'settings' }))
    }


    return (
        <>
            <div className="settings">
                <SettingsElement text="Тема" UIElement={<SwitchButton />} action={changeTheme} />
                <SettingsElement text="Фон" UIElement={<Button text="выбрать" action={chooseBackground} />} />
                <SettingsElement text="Меню" UIElement={<Button text="закрыть" action={closeSettings} />} />
            </div>

            {
                isBgStylerOpened ? <BackgroundStyler /> : <></>
            }
        </>
    )
}
