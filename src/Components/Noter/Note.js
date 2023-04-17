import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteNote } from "./notesSlice";
import { editNote, editTitle } from "./notesSlice";
import classes from "./Note.module.css";
import { configureDate } from "./dateConfig";

const Note = ({ title, note, id, tag }) => {
  const dispatch = useDispatch();
 
  const currentDate = configureDate()
  const deleteNoteHandler = () => {
    const confirmDeletion = window.confirm(`do you want to delete ${title.trim().length !== 0 ? title : '"Untitled"'} note`)
    if(confirmDeletion)dispatch(deleteNote(id));
  };
  const onTitleChangeHandler = (e) => {
    dispatch(editTitle({ id, title: e.currentTarget.textContent }));
  };
  const onNoteChangeHandler = (e) => {
    dispatch(editNote({ id, note: e.currentTarget.textContent }));
  };

  return (
    <Card>
      <div className={classes.txt}>
        <h3 contentEditable onBlur={onTitleChangeHandler}>
          {title}
        </h3>
        <p contentEditable onBlur={onNoteChangeHandler}>
          {note}
        </p>
      </div>
      <br />
      <div className={classes.bottom}>
        <div className={classes.bottomTxt}>
          <p>{currentDate}</p>
          <p>{tag}</p>
        </div>
        <div className={classes.icons}>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={deleteNoteHandler}
            size="sm"
            title="delete"
          />
        </div>
      </div>
    </Card>
  );
};

export default Note;
