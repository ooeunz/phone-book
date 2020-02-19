import React from "react";
import TodoListTemplate from "./components/TodoListTemplate/TodoListTemplate";
import Form from "./components/Form/Form"
import TodoItemList from "./components/TodoItemList/TodoItemList"

function App() {
  return (
    <TodoListTemplate form={<Form />}>
      <TodoItemList />
    </TodoListTemplate>
  );
}

export default App;
