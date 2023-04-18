import React from 'react'
import Card from '../UI/Card'
import Memo from './Memo'
import classes from './Memo.module.css'
const Memos = () => {
  return (
    <div className={classes.memoCont}>
    <h2>Remniders</h2>
    <div className={classes.memos}>

        <Memo/> 
        <Memo/> 

        <Memo/> 
    </div>

    </div> 
  )
}

export default Memos