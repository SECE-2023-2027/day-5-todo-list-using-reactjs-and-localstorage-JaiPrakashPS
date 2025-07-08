import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ todos, deleteTodo, toggleComplete, editTodo, finishTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          finishTodo={finishTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
