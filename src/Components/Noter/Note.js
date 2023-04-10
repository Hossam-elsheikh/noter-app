import React from 'react'
import Card from '../UI/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteNote } from './notesSlice'
import classes from './Note.module.css'
const Note = ({title, note,id}) => {
  const dispatch = useDispatch()
  const deleteNoteHandler =() =>{
    dispatch(deleteNote(id))
  }
  return (
   <Card>
   <div>

    <h3>{title}</h3>
    <p>{note}</p>
   </div>
   <div className={classes.icons}>
    <FontAwesomeIcon icon={faTrash} onClick={deleteNoteHandler} size='sm' title='delete'/>
   </div>
    
   </Card>
  )
}

export default Note