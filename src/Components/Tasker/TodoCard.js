import React, { useState } from "react";
import TaskCard from "../UI/TaskCard";
import classes from "../UI/TaskCard.module.css";
import { useDispatch } from "react-redux";
import { addNewTask, checkTask, deletTask, deleteCard } from "./taskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const TodoCard = ({ data }) => {
  const dispatch = useDispatch();

  const newTaskInit = {
    title: "",
    completed: false,
  };
  const [newTask, setNewTask] = useState(newTaskInit);

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      console.log(data.id);
      dispatch(
        addNewTask({
          id: data.id,
          task: newTask,
        })
      );
      setNewTask(newTaskInit);
    }
  };
  const deleteCardHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'}).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCard(data.id));
          Swal.fire(
            'Deleted!',
            'Your task Card has been deleted.',
            'success'
          )
        }
      })
  
  };
  return (
    <TaskCard>
      <h3>{data.name}</h3>
      <FontAwesomeIcon
        icon={faTrash}
        size="xs"
        className={classes.delete_card}
        onClick={deleteCardHandler}
      />
      <ul>
        {data.tasks.map((task) => (
          <li key={task.id}>
            {task.completed && (
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                className={classes.delete_task}
                onClick={() =>
                  dispatch(deletTask({ cardId: data.id, taskId: task.id }))
                }
              />
            )}
            <label
              htmlFor={task.id}
              style={
                task.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {" "}
              {task.title}
            </label>
            <input
              id={task.id}
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                dispatch(checkTask({ cardId: data.id, taskId: task.id }));
              }}
            />
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask.title}
        placeholder="add task"
        onKeyDown={enterHandler}
        onChange={(e) =>
          setNewTask({
            ...newTask,
            id: Math.round(Math.random() * 3342),
            title: e.target.value,
          })
        }
      />
    </TaskCard>
  );
};

export default TodoCard;
