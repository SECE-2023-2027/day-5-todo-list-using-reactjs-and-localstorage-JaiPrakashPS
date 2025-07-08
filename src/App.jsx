import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, completed: false, finished: false }; // include `finished`
  setTodos([newTodo, ...todos]);
};


  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  
const finishTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, finished: true } : todo
  ));
};
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };


  return (
    <>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
  todos={todos}
  deleteTodo={deleteTodo}
  toggleComplete={toggleComplete}
  editTodo={editTodo}
  finishTodo={finishTodo} // ADD THIS
/>

    </>
  );
}

export default App;
