import { faBell, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Memo.module.css'
const Memo = () => {
  return (
    <div className={classes.memo}>
    <h3>Help Fixing Some Bugs</h3>
    <p>Tue 17 Aug 02:30 pm</p>
    <FontAwesomeIcon icon={faTrash} className={classes.trash}/>
    <FontAwesomeIcon icon={faBell} className={classes.bell} size='3x' transform={{ rotate: -30 }}/>

    </div>
  )
}

export default Memo