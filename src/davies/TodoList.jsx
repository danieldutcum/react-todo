import React from "react";
import TodoItem from "./TodoItem";

export default ({ todos, setStatus }) => {
  return (
    <>
      <div className="todo-list2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} setStatus={setStatus} {...todo} />
        ))}
      </div>
    </>
  );
};
