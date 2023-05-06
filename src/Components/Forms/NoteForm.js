import React, { useState } from "react";
import classes from "./NoteForm.module.css";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../Noter/notesSlice";
const NoteForm = (props) => {
  const initialState = {
    title: "",
    note: "",
    tag: "",
  };
  const noteId = Math.round(Math.random() * 340);
  const [noteData, setNoteData] = useState(initialState);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        ...noteData,
        id: noteId,
        note: noteData.note.length === 0 ? "Empty Note" : noteData.note,
      })
    );
    setNoteData(initialState);
  };
  return (
    <div className={classes.form}>
      <Form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={noteData.title}
          placeholder="Title"
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />

        <textarea
          placeholder="Take a note..."
          value={noteData.note}
          rows='10'
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        ></textarea>

        <div className={classes.btn}>
          <input
            type="text"
            placeholder="Tag"
            onChange={(e) => setNoteData({ ...noteData, tag: e.target.value })}
          />
          <button type="submit">Save</button>
        </div>
      </Form>
    </div>
  );
};

export default NoteForm;
