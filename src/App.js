import React, { useState } from "react";
import TodoListTemplate from "./components/TodoListTemplate/TodoListTemplate";
import Form from "./components/Form/Form"
import TodoItemList from "./components/TodoItemList/TodoItemList"

const App = () => {
  let id = 3;
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: '리액트 소개', checked: false },
    { id: 1, text: '리액트 소개', checked: true },
    { id: 2, text: '리액트 소개', checked: false },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      hacndleCreate();
    }
  }

  const hacndleCreate = () => {
    setInput('');
    setTodos(todos.concat({
      id: id++,
      text: input,
      checked: false
    }));
  }

  const handleToggle = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    setTodos([
      ...todos.slice(0, index),
      {
        ...selected,
        checked: !selected.checked
      },
      ...todos.slice(index + 1, todos.length)
    ])
  }

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <TodoListTemplate form={
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={hacndleCreate}
      />
    }>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TodoListTemplate>
  );

}

export default App;
