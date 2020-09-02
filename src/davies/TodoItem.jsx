import React from "react";

export default ({ id, text, completed, setStatus }) => {
  return (
    <div
      className={`todo-item2 ${completed ? "green" : "red"}`}
      onClick={() => setStatus(id)}
    >
      <br />
      <div>{text}</div>

      {completed ? (
        <div className="tag green">{"😎"}</div>
      ) : (
        <div className="tag red">{"😪"}</div>
      )}
    </div>
  );
};
