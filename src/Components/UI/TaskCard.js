import React from 'react'
import classes from './TaskCard.module.css'
const TaskCard = (props) => {
  return (
    <div className={classes.tasks}>
        {props.children}
    </div>
  )
}

export default TaskCard