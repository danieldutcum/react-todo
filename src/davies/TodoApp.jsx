import React, { useState } from "react";
import todoData from "../component/todoData";
import TodoList from "./TodoList";
import AddForm from "./AddForm";

import "./davies.css";

export default () => {
  const [todos, setTodos] = useState(todoData);

  const handleSetStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return { ...todo };
      })
    );
  };

  const handleAdd = (todo) => {
    console.log(todo);

    setTodos((prevTodo) => [...prevTodo, todo]);
  };
  return (
    <div className="App">
      <AddForm addTodo={handleAdd} />
      <TodoList todos={todos} setStatus={handleSetStatus} />
    </div>
  );
};
