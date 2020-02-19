import React from "react";
import TodoItem from "../TodoItemItem/TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove}) => {
  return (
    <div>
      <TodoItem text="안녕" />
      <TodoItem text="리액트" />
      <TodoItem text="반가워" />
    </div>
  );
}

export default TodoItemList;