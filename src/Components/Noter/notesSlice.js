import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    notes:[{title:'note1',note:'this is my first note',id:'sam'},{title:'note1',note:'this is my first note',id:'sam2'},{title:'note1',note:'this is my first note',id:'sam3'},{title:'note1',note:'this is my first note',id:'sam4'},{title:'note1',note:'this is my first note',id:'sam5'}]
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
        },
        editNote : (state,action) =>{
            const indexOfNote = state.notes.findIndex((n)=> n.id === action.payload.id)
            
            state.notes[indexOfNote] = {...state.notes[indexOfNote], note: action.payload.note}
        },
        editTitle : (state,action) =>{
            const indexOfNote = state.notes.findIndex((n)=> n.id === action.payload.id)
            state.notes[indexOfNote] = {...state.notes[indexOfNote], title: action.payload.title}
        }
    }
})

export const {addNote,deleteNote,editNote,editTitle} = notesSlice.actions;
export default notesSlice.reducer 