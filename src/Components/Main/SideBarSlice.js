import { createSlice } from "@reduxjs/toolkit";

const initialState = {isShown: false}
export const sidebarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers :{
        showSideBar: (state)=>{
            state.isShown = !state.isShown
        }
    }
})

export const {showSideBar} = sidebarSlice.actions
export default sidebarSlice.reducer