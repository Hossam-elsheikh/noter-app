import { createSlice } from "@reduxjs/toolkit";
import { dummyNotes } from "./DummyData";
const initialState = {
  notes: dummyNotes,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },
    editNote: (state, action) => {
      const indexOfNote = state.notes.findIndex(
        (n) => n.id === action.payload.id
      );

      state.notes[indexOfNote] = {
        ...state.notes[indexOfNote],
        note: action.payload.note,
      };
    },
    editTitle: (state, action) => {
      const indexOfNote = state.notes.findIndex(
        (n) => n.id === action.payload.id
      );
      state.notes[indexOfNote] = {
        ...state.notes[indexOfNote],
        title: action.payload.title,
      };
    },
  },
});

export const { addNote, deleteNote, editNote, editTitle } = notesSlice.actions;
export default notesSlice.reducer;
