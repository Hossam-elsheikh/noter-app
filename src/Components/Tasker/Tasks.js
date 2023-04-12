import React from 'react'
import TodoList from './TodoCard';
import Card from '../UI/Card';
import Container from '../UI/Container';
import { dummyTasks } from './DummyData';
const Tasks = () => {

  
  const map= dummyTasks.map((item)=> 
  <TodoList key={item.id} data={item} /> 
  
  )

  return (
 <Container>
    {map}
 </Container>
     


  )

}

export default Tasks