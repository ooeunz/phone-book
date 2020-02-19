import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, checked, id, onToggle, onRemove}) => {
  
  const onClickRemove = (event) => {
    event.stopPropagation();
    onRemove(id);
  }
  
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div className="remove" onClick={onClickRemove}>&times;</div>
      <div className={`todo-text ${checked ? ' checked' : ''}`}>
        <div>{text}</div>
      </div>
      {
        checked && (<div className="check-mark"></div>)
      }
    </div>
  );
}

export default TodoItem;