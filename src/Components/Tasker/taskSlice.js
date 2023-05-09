import { createSlice } from "@reduxjs/toolkit";
import { dummyTasks } from "../Noter/DummyData";

const NullState = {
  tasks: dummyTasks,
};
const initialState = JSON.parse(localStorage.getItem("tasks")) || NullState;

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskCard: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    addNewTask: (state, action) => {
      const indexOfCard = state.tasks.findIndex(
        (c) => action.payload.id === c.id
      );
      state.tasks[indexOfCard].tasks = [
        action.payload.task,
        ...state.tasks[indexOfCard].tasks,
      ];
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    checkTask: (state, action) => {
      const indexOfCard = state.tasks.findIndex(
        (c) => action.payload.cardId === c.id
      );
      const indexOfTask = state.tasks[indexOfCard].tasks.findIndex(
        (t) => action.payload.taskId === t.id
      );

      state.tasks[indexOfCard].tasks[indexOfTask].completed =
        !state.tasks[indexOfCard].tasks[indexOfTask].completed;

      const tasksLength = state.tasks[indexOfCard].tasks.length;
      if (state.tasks[indexOfCard].tasks[indexOfTask].completed) {
        const task = state.tasks[indexOfCard].tasks.splice(indexOfTask, 1)[0];
        state.tasks[indexOfCard].tasks.splice(tasksLength, 0, task);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deletTask: (state, action) => {
      const indexOfCard = state.tasks.findIndex(
        (c) => action.payload.cardId === c.id
      );
      state.tasks[indexOfCard].tasks = state.tasks[indexOfCard].tasks.filter(
        (t) => t.id !== action.payload.taskId
      );
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteCard: (state, action) => {

      state.tasks = state.tasks.filter((c) => c.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const { addTaskCard, addNewTask, checkTask, deletTask, deleteCard } =
  taskSlice.actions;
export default taskSlice.reducer;
