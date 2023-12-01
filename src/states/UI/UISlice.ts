import { createSlice } from "@reduxjs/toolkit"

interface UIState {
    isMenuOpened: boolean,
    isSettingsOpened: boolean,
    isBgStylerOpened: boolean,
    backGroundTransperent: string,
    isSliderOpen: boolean
}

const initialState: UIState = {
    isMenuOpened: false,
    isSettingsOpened: false,
    isBgStylerOpened: false,
    backGroundTransperent: '0',
    isSliderOpen: false
}

const UISlice = createSlice({
    name: 'changeUIState',
    initialState,
    reducers: {
        flipState: (state, action) => {
            if(action.payload.type == 'menu') {
                state.isMenuOpened = !state.isMenuOpened
            }
            else if(action.payload.type == 'settings') {
                state.isSettingsOpened = !state.isSettingsOpened
            }
            else if(action.payload.type == 'bgStyler') {
                state.isBgStylerOpened = !state.isBgStylerOpened
            }
            else if(action.payload.type == 'slider') {
                state.isSliderOpen = !state.isSliderOpen
            }
        },
        changeValue: (state, action) => {
            if(action.payload.type == 'transperent') {
                state.backGroundTransperent = action.payload.value
            }
        }
    },
})

export const { flipState, changeValue } = UISlice.actions
export default UISlice.reducer