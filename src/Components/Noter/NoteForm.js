import React, { useState } from "react";
import classes from "./NoteForm.module.css";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";
const NoteForm = () => {
  const initialState = {
    title: "",
    note: "",
    tag: "",
  };
  const noteId = Math.round(Math.random() * 340);
  const [collapse, setcollapse] = useState(true);
  const [noteData, setNoteData] = useState(initialState);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setcollapse(true);
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
    <div className={classes.form} style={collapse ? { width: "100%" } : null}>
      <Form
        onSubmit={onSubmitHandler}
        style={collapse ? { borderRadius: "2rem" } : null}
      >
        {!collapse && (
          <input
            type="text"
            value={noteData.title}
            placeholder="Title"
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
          />
        )}
        <textarea
          onFocus={() =>setcollapse(false)}
          placeholder="Take a note..."
          cols={collapse ? "40" : "5"}
          rows={collapse ? "1" : "10"}
          value={noteData.note}
          style={collapse ? { backgroundColor: "transparent" } : null}
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        ></textarea>
        {!collapse && (
          <div className={classes.btn}>
            <input
              type="text"
              placeholder="Tag"
              onChange={(e) =>
                setNoteData({ ...noteData, tag: e.target.value })
              }
            />
            <button type="submit">Save</button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default NoteForm;
