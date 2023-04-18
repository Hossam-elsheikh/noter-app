import React from 'react'
import classes from './Card.module.css'
import { colors } from '../Noter/DummyData'
const Card = ({children,maxWidth,maxHeight}) => {
  const randomColor = colors[Math.round(Math.random()* 30)]
  return (
    <div className={classes.card} style={{backgroundColor: randomColor,  maxWidth: maxWidth, maxHeight: maxHeight }}>
    {children}
    </div>
  )
}

export default Card