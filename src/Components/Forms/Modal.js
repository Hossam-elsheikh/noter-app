import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'
const OverLay =(props)=>{
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}
const FormBackdrop = (props)=>{
return(
  <div className='formbackdrop' onClick={props.onClose}/>
)
}

const directory = document.getElementById('overlay')
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<OverLay>{props.children}</OverLay>,directory)}
      {createPortal(<FormBackdrop onClose={props.onClose}/> ,directory)}
    </Fragment>
  )
}

export default Modal