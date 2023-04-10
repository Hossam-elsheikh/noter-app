import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    notes:[{title:'note1',note:'this is my first note'}]
}

export const notesSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote: (state,action) =>{
            state.notes = [ action.payload, ...state.notes]
        },
        deleteNote : (state,action) =>{
            state.notes = state.notes.filter((n)=> n.id !== action.payload) 
        }
    }
})

export const {addNote,deleteNote} = notesSlice.actions;
export default notesSlice.reducer 