import classes from './Container.module.css'
import Add from '../Forms/Add'
import Modal from '../Forms/Modal'
import Form from '../Forms/Form'
import { showModal } from '../Forms/formSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Container = ({children,gap}) => {
  const dispatch = useDispatch()
  const modalVis = useSelector((state)=> state.form.modalVisible)
  return (
    <div className={classes.container} style={{gap}}>
{children}
<Add onShowModal={()=>dispatch(showModal())}/>
{modalVis && <Modal onClose={()=>dispatch(showModal())} >
  <Form />
</Modal>}
    </div>
  )
}

export default Container