import React from 'react'
import { useSelector } from 'react-redux'
import NoteForm from './NoteForm'
const Form = (props) => {
    const form = useSelector((state)=> state.form)
  return (
    <div>
        {form.activeForm === 'note' && <NoteForm></NoteForm>}
    </div>
  )
}

export default Form