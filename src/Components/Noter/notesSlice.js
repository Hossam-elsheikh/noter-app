import { createSlice } from "@reduxjs/toolkit";
import { dummyNotes } from "./DummyData";
import { colors } from "./DummyData";
const NullState = {
  notes: dummyNotes,
  tags: [],
  filter: { active: false, notes: [] },
};
const initialState = JSON.parse(localStorage.getItem("notes")) || NullState;
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
      localStorage.setItem("notes", JSON.stringify(state));

      const indexOfTag = state.tags.findIndex(
        (t) => t.title === action.payload.tag
      );
      const tagSelected = state.tags[indexOfTag];
      if (tagSelected) {
        state.tags[indexOfTag].count += 1;
        localStorage.setItem("notes", JSON.stringify(state));
      } else if (action.payload.tag !== "") {
        state.tags = [{ title: action.payload.tag, count: 1 }, ...state.tags];
        localStorage.setItem("notes", JSON.stringify(state));
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
          localStorage.setItem("notes", JSON.stringify(state));
        } else {
          state.tags = state.tags.filter((t) => t.title !== noteTag);
          localStorage.setItem("notes", JSON.stringify(state));
        }
      }
      state.notes = state.notes.filter((n) => n.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state));
    },
    editNote: (state, action) => {
      const indexOfNote = state.notes.findIndex(
        (n) => n.id === action.payload.id
      );

      state.notes[indexOfNote] = {
        ...state.notes[indexOfNote],
        note: action.payload.note,
      };
      localStorage.setItem("notes", JSON.stringify(state));
    },
    editTitle: (state, action) => {
      const indexOfNote = state.notes.findIndex(
        (n) => n.id === action.payload.id
      );
      state.notes[indexOfNote] = {
        ...state.notes[indexOfNote],
        title: action.payload.title,
      };
      localStorage.setItem("notes", JSON.stringify(state));
    },
    setFilter: (state, action) => {
      state.filter.active = true;
      state.filter.notes = state.notes.filter((n) => n.tag === action.payload);
      localStorage.setItem("notes", JSON.stringify(state));
    },
    clearFilter: (state) => {
      state.filter.active = false;
      localStorage.setItem("notes", JSON.stringify(state));
    },
    changeColor: (state, action) => {
      const noteIndex = state.notes.findIndex((e) => e.id === action.payload);
      state.notes[noteIndex].color = colors[Math.round(Math.random() * 30)];
      localStorage.setItem("notes", JSON.stringify(state));
    },
    searchFilter: (state, action) => {
      if (action.payload.val !== "") {
        state.filter.active = true;
        state.filter.notes = state.notes.filter(
          (note) =>
            note.title
              .toUpperCase()
              .includes(action.payload.val.toUpperCase()) ||
            note.note.toUpperCase().includes(action.payload.val.toUpperCase())
        );
      } else {
        state.filter.active = false;
      }
    },
  },
});
export const {
  addNote,
  deleteNote,
  editNote,
  editTitle,
  setFilter,
  clearFilter,
  changeColor,
  searchFilter,
} = notesSlice.actions;
export default notesSlice.reducer;
