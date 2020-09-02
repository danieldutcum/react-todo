import React, { useState } from "react";

export default ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return null;
    }
    addTodo({
      text: text,
      completed: false,
      id: new Date().getTime().toString(),
    });
    settext("");
  };
  const [text, settext] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        value={text}
        type="text"
        placeholder="Enter a new todo"
        onChange={(e) => settext(e.target.value)}
      />
    </form>
  );
};
