import React from 'react'
import TodoList from './TodoCard';
import Card from '../UI/Card';
import Container from '../UI/Container';
const Tasks = () => {
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
 <Container>
    {map}
 </Container>
     


  )

}

export default Tasks