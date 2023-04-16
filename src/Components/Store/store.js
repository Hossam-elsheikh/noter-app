import { configureStore } from "@reduxjs/toolkit";
import notesReducer from '../Noter/notesSlice'
import sideBarReducer from '../Main/SideBarSlice'
export const store = configureStore({
    reducer:{
        notes: notesReducer,
        sideBar: sideBarReducer
    }
})