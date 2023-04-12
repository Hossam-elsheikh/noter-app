import React from 'react'
import classes from './TaskerPage.module.css';
import NoteForm from '../../Components/Noter/NoteForm'
import TodoList from '../../Components/Noter/TodoList/TodoCard';
import Card from '../../Components/UI/Card';
const TaskerPage = () => {
  // const data = [{id:1,todo:"hello"}, {id:2,todo:"world"}, {id:3,todo:"foo"}, {id:4,todo:"bar"}];
  const data = [
    {
      id: 1,
      tasks: [
        {
          title: "Buy groceries",
          description: "Milk, bread, eggs, and cheese",
          completed: false
        },
        {
          title: "Cook dinner",
          description: "Make spaghetti and meatballs",
          completed: false
        }
      ]
    },
    {
      id: 2,
      tasks: [
        {
          title: "Do laundry",
          description: "Wash and fold clothes",
          completed: false
        },
        {
          title: "Clean the house",
          description: "Vacuum the floors and dust the shelves",
          completed: true
        }
      ]
    }
  ];
  
  const map= data.map((item)=> <TodoList data={item} />  )

  return (
    <div className={classes.container}>
      <NoteForm />
      <div className={classes.notes}>
{map}
      </div>
    </div>


  )

}

export default TaskerPage