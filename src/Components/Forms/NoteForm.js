import React, { useState } from "react";
import classes from "./NoteForm.module.css";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../Noter/notesSlice";
import { showModal } from "./formSlice";
import { colors } from "../Noter/DummyData";
import { useNavigate } from "react-router-dom";
const NoteForm = (props) => {
  const initialState = {
    title: "",
    note: "",
    tag: "",
  };
  const noteId = Math.round(Math.random() * 340);
  const [noteData, setNoteData] = useState(initialState);
  const dispatch = useDispatch();
  const randomColor = colors[Math.round(Math.random()* 30)]
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        ...noteData,
        id: noteId,
        color: randomColor,
        note: noteData.note.length === 0 ? "Empty Note" : noteData.note,
      })
    );
    setNoteData(initialState);
    dispatch(showModal())
    navigate('/')
  };
  return (
    <div className={classes.form} >
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
