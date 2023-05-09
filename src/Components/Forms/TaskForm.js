import React, { useState } from "react";
import classes from "./NoteForm.module.css";
import { useDispatch } from "react-redux";
import { addTaskCard } from "../Tasker/taskSlice";
import { useNavigate } from "react-router-dom";
import { showModal } from "./formSlice";
const TaskForm = () => {
  const init = { name: "", tasks: [] };
  const [tasksData, setTasks] = useState(init);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTaskCard({ ...tasksData, id: Math.round(Math.random() * 342) })
    );
    navigate("/tasker");
    dispatch(showModal());
    
  };
  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <h3>Add a new Tasks card</h3>
        <input
          type="text"
          placeholder="Your Tasks' Tracker Name"
          required
          onChange={(e) => setTasks({ ...tasksData, name: e.target.value })}
        />
        <p>Add one Task at least</p>
        <div className={classes.btn}>
          <input
            type="text"
            placeholder="ex: do home work"
            required
            onChange={(e) => {
              setTasks({
                ...tasksData,
                tasks: [
                  {
                    title: e.target.value,
                    id: Math.round(Math.random() * 32),
                    completed: false,
                  },
                ],
              });
            }}
          />
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
