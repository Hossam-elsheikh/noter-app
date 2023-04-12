import React from "react";
import Card from "../UI/Card";
import classes from "./TodoCard.module.css";
const TodoCard = ({ data }) => {
  const handel = () => {
    console.log(data);
  };

  return (
    <Card>
      {data.id}
      {data.tasks.map((task) => (
        <li key={data.tasks.indexOf(task)}>
          <input id={data.id} type="checkbox" checked={task.completed} onChange={handel} />
          <label htmlFor={task.id}> {task.title}</label>
        </li>
      ))}
    </Card>
  );
};

export default TodoCard;
