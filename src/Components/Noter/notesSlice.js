import { createSlice } from "@reduxjs/toolkit";
import { dummyNotes } from "./DummyData";
const initialState = {
  notes: dummyNotes,
  tags: [],
  filter: {active: false, notes: []}
};
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
      const indexOfTag = state.tags.findIndex(
        (t) => t.title === action.payload.tag
      );
      const tagSelected = state.tags[indexOfTag];
      if (tagSelected) {
        state.tags[indexOfTag].count += 1;
      } else if (action.payload.tag !== "") {
        state.tags = [{ title: action.payload.tag, count: 1}, ...state.tags];
      }
    },
    deleteNote: (state, action) => {
      const deletedNoteIndex = state.notes.findIndex(
        (n) => n.id === action.payload
      );
      const noteTag = state.notes[deletedNoteIndex].tag;
      console.log(noteTag);
      const indexOfTag = state.tags.findIndex((t) => t.title === noteTag);
      const tagSelected = state.tags[indexOfTag];
      if (tagSelected) {
        if (tagSelected.count > 1) {
          state.tags[indexOfTag].count -= 1;
        } else {
          state.tags = state.tags.filter((t) => t.title !== noteTag);
        }
      }
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
    setFilter: (state,action) =>{
      state.filter.active = true;
      state.filter.notes = state.notes.filter((n)=> n.tag === action.payload)
    },
    clearFilter : (state)=>{
      state.filter.active = false
    }
  },
});

export const { addNote, deleteNote, editNote, editTitle,setFilter,clearFilter } = notesSlice.actions;
export default notesSlice.reducer;
