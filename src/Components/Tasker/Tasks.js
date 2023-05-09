import React from "react";
import Todo from "./TodoCard";
import Container from "../UI/Container";
import { useSelector } from "react-redux";
const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Container gap="3rem">
      {tasks.map((item) => (
        <Todo key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Tasks;
