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
          title: "Go for a run",
          description: "Run for 30 minutes around the park",
          completed: false
        },
        {
          title: "Attend a meeting",
          description: "Attend the weekly team meeting at 10am",
          completed: true
        },
        {
          title: "Read a book",
          description: "Read 'The Alchemist' by Paulo Coelho",
          completed: false
        }
      ]
    },
    {
      id: 2,
      tasks: [
        {
          title: "Finish project",
          description: "Complete the final touches on the project",
          completed: false
        },
        {
          title: "Call parents",
          description: "Call parents to check in and say hello",
          completed: true
        },
        {
          title: "Buy a gift",
          description: "Purchase a birthday gift for a friend",
          completed: true
        }
      ]
    },
    {
      id: 3,
      tasks: [
        {
          title: "Go to the gym",
          description: "Lift weights and do cardio for an hour",
          completed: true
        },
        {
          title: "Write a blog post",
          description: "Write a blog post about a recent trip",
          completed: false
        }
      ]
    }
  ];
  
  const map= data.map((item)=> 
  <TodoList key={item.id} data={item} /> 
  
  )

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