import React from 'react'
import { useSelector } from 'react-redux'
import NoteForm from './NoteForm'
import classes from './Notes.module.css'
import Note from './Note'

const Notes = () => {
  const notes = useSelector((state)=> state.notes.notes)
  return (
    <div className={classes.cont}>
        <NoteForm/>
        <div className={classes.notes}>
            {notes.map(e=> <Note title={e.title} note={e.note} key={e.id} id={e.id}/>)}
        </div>
    </div>
  )
}

export default Notes