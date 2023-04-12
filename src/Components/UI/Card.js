import React from 'react'
import classes from './Card.module.css'
import { colors } from '../Noter/DummyData'
const Card = ({children}) => {
  const randomColor = colors[Math.round(Math.random()* 30)]
  return (
    <div className={classes.card} style={{backgroundColor: randomColor}}>
    {children}
    </div>
  )
}

export default Card