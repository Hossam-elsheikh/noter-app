import React from 'react';
import classes from './TodoCard.module.css';
import Card from '../../UI/Card';
import { useState } from 'react';
const TodoCard = ({data}) => {

  
  const handel=()=>{
   console.log(data);


 }
 
 
    return (

        <Card>
        {data.id} 
          {data.tasks.map((task)=>(
            
             <li  key={data.tasks.indexOf(task)} >
             <input type="checkbox"    checked={task.completed} onChange={handel}   />
             
            <label htmlFor="vehicle1"> {task.title}</label>
            </li>
            
            

             ))}

            
        </Card>


    );
}

export default TodoCard;
