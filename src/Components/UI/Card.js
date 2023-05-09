import React from 'react'
import classes from './Card.module.css'
import { colors } from '../Noter/DummyData'
const Card = ({children,maxWidth,maxHeight,backgroundColor}) => {
  
  return (
    <div className={classes.card} style={{backgroundColor,  maxWidth, maxHeight }}>
    {children}
    </div>
  )
}

export default Card