import React from "react";
import TodoItem from "../TodoItemItem/TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove}) => {
  const todoList = todos.map(
    ({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    )
  )
  return (
    <div>
      {todoList}
    </div>
  );
}

export default TodoItemList;