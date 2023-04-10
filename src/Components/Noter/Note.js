import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteNote } from "./notesSlice";
import { editNote,editTitle } from "./notesSlice";
import classes from "./Note.module.css";
const Note = ({ title, note, id }) => { 
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(id));
  };
  const onTitleChangeHandler = (e) => {
    dispatch(
      editTitle({ id, title: e.currentTarget.textContent })
    );
  };
  const onNoteChangeHandler = (e) => {
    dispatch(
      editNote({ id, note: e.currentTarget.textContent })
    );
  };
  return (
    <Card>
      <div className={classes.txt}>
        <h3  contentEditable onBlur={onTitleChangeHandler}>
          {title}
        </h3>
        <p
          contentEditable
          onBlur={onNoteChangeHandler}
        >
          {note}
        </p>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={deleteNoteHandler}
          size="sm"
          title="delete"
        />
      </div>
    </Card>
  );
};

export default Note;
