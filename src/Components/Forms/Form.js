import React from 'react'
import { useSelector } from 'react-redux'
import NoteForm from './NoteForm'
import TaskForm from './TaskForm'
const Form = (props) => {
    const form = useSelector((state)=> state.form)
  return (
    <div>
        {form.activeForm === 'note' && <NoteForm/>}
        {form.activeForm === 'task' && <TaskForm/>}

    </div>
  )
}

export default Form