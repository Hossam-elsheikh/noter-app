import React from 'react';
import classes from './TodoCard.module.css';
import Card from '../../UI/Card';
const TodoCard = ({data}) => {

 console.log(data);

 
 
    return (

        <Card>
        {data.id} 
          {data.tasks.map((task)=>(
            < >
             
            <input type="checkbox"  checked={true}/>
            <label for="vehicle1"> {task.title}</label>
            
            
            </>
             ))}

            
        </Card>


    );
}

export default TodoCard;
