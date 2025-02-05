import { useState } from 'react'
import { setLocalStorageItem } from '../custom-hooks/setLocalStorageItem'

const SwitchButton = () => {
    const getInitialState = () => {
        const theme = localStorage.getItem('theme')
        if(theme != null) {
            if(theme.replaceAll('"', '') == 'light') return false
            else return true
        }
    }

    const [checked, setChecked] = useState(getInitialState)

    const changeTheme = (event:boolean) => {
        setChecked(event)
        
        if(event) setLocalStorageItem('theme', 'dark')
        else setLocalStorageItem('theme', 'light')
    }

    return (
        <div className='switchButton'>
            <input type='checkbox' id='toggleCheckbox' 
                onChange={e => changeTheme(e.target.checked)}
                checked={checked}
            />

            <label htmlFor='toggleCheckbox'>
                <div id='star'>
                    <div className='star' id='star-1'>★</div>
                    <div className='star' id='star-2'>★</div>
                </div>
                <div id='moon'></div>
            </label>
        </div>
    )
}

export default SwitchButton
