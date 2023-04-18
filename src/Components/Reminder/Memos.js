import React from 'react'
import Card from '../UI/Card'
import Memo from './Memo'
import classes from './Memo.module.css'
const Memos = () => {
  return (
    <Card maxWidth='50%' maxHeight='100vh' minWidth='50%'>
    <h3>Remniders</h3>
    <div className={classes.memos}>

        <Memo/> 
        <Memo/> 

        <Memo/> 
    </div>

    </Card> 
  )
}

export default Memos