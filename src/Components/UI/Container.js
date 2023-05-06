import React, { useState } from 'react'
import classes from './Container.module.css'
import Add from '../Forms/Add'
import Modal from '../Forms/Modal'
import Form from '../Forms/Form'
const Container = ({children}) => {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className={classes.container}>
{children}
<Add onShowModal={()=>setShowModal(!showModal)}/>
{showModal && <Modal onClose={()=>setShowModal(!showModal)} >
  <Form />
</Modal>}
    </div>
  )
}

export default Container