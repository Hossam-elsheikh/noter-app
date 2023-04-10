import React, { useState } from 'react'
import classes from './NoteForm.module.css'
import { Form } from 'react-router-dom'
const NoteForm = () => {
    const [collapse, setcollapse] = useState(true)
  return (
    <div className={classes.form}>
    <Form onSubmit={(e)=>{e.preventDefault();setcollapse(true)}}>
        {!collapse && <input type='text' placeholder='Title'/>}
        <textarea onFocus={()=>setcollapse(false)} placeholder='Take a note...' cols={collapse ? "40" : '5'} rows={collapse ? "1" : "10"}></textarea>
       {!collapse &&  <div className={classes.btn}>
        <input type='text' placeholder='Tag'/>
        <button type='submit'>Save</button>
        </div>}
    </Form>
    </div>
  )
}

export default NoteForm