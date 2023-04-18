import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './Event.module.css'
const Event = () => {
  return (
    <div className={classes.event}>
    <div className={classes.icon}>
        <FontAwesomeIcon icon={faCalendar} size='4x'/>
        <div className={classes.txt}>
            <h3>27</h3>
            <h4>Mars</h4>
        </div>
    </div>
    <div className={classes.details}>
        <h3>Alex Programming Summit</h3>
        <p>this event is so important, and you must
attend with full commitment.</p>
<FontAwesomeIcon icon={faTrash} className={classes.trash}/>
    </div>
    </div>
  )
}

export default Event