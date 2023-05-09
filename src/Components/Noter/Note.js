import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "./notesSlice";
import { editNote, editTitle, changeColor } from "./notesSlice";
import classes from "./Note.module.css";
import { configureDate } from "./dateConfig";
import Swal from "sweetalert2";

const Note = ({ title, note, id, tag }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const currNote = notes.filter((n) => n.id === id);
  const currentDate = configureDate();
  const deleteNoteHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'}).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteNote(id));
          Swal.fire(
            'Deleted!',
            'Your Note has been deleted.',
            'success'
          )
        }
      })
  };
  const onTitleChangeHandler = (e) => {
    dispatch(editTitle({ id, title: e.currentTarget.textContent }));
  };
  const onNoteChangeHandler = (e) => {
    dispatch(editNote({ id, note: e.currentTarget.textContent }));
  };
  const changeColorHandler = () => {
    dispatch(changeColor(id))
  };
  return (
    <Card backgroundColor={currNote[0].color}>
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
            icon={faPalette}
            size="sm"
            title="Change color"
            onClick={changeColorHandler}
          />
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
