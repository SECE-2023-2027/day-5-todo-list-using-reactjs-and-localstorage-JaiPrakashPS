import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleComplete, editTodo, finishTodo }) {
  return (
    <ul className="max-w-2xl mx-auto px-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet. Start adding!</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            finishTodo={finishTodo}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
