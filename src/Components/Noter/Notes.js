import React from "react";
import { useSelector } from "react-redux";
import classes from "./Notes.module.css";
import Note from "./Note";
import Container from "../UI/Container";
import NoNotes from "../UI/NoNotes";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const filter = useSelector((state) => state.notes.filter);
  return (
    <Container>
      <div className={classes.cont}>
        <div className={classes.notes}>
          {!filter.active && notes.length !== 0 ? (
            notes.map((e) => (
              <Note
                tag={e.tag}
                title={e.title}
                note={e.note}
                key={e.id}
                id={e.id}
              />
            ))
          ) : notes.length === 0 ? (
            <NoNotes />
          ) : (
            filter.notes.map((e) => (
              <Note
                tag={e.tag}
                title={e.title}
                note={e.note}
                key={e.id}
                id={e.id}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Notes;
