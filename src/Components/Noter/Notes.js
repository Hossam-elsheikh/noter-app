import React from 'react'
import NoteForm from './NoteForm'
import classes from './Notes.module.css'
const Notes = () => {
  return (
    <div className={classes.cont}>
        <NoteForm/>
    </div>
  )
}

export default Notes