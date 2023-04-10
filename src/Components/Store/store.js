import { configureStore } from "@reduxjs/toolkit";
import notesReducer from '../Noter/notesSlice'
export const store = configureStore({
    reducer:{
        notes: notesReducer
    }
})