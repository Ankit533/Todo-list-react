import React, { useState } from "react";

const Todolist = (props) => {
  const [line, setLine] = useState(false);
  const deleteItem = () => {
    setLine(true);
  };
  return (
    <div className="todo_list">
      <p style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </p>
      <span onClick={deleteItem}>
        <i className="fa fa-times-circle newfa"></i>
      </span>
    </div>
  );
};

export default Todolist;
