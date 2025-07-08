import React, { useState } from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo, finishTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleFinish = () => {
    finishTodo(todo.id); // use passed-in function that updates state + localStorage
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.finished ? 'finished' : ''}`}>
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      )}

      <div className="actions">
        {!todo.finished && (
          <button onClick={handleFinish}>Finish</button>
        )}
        {todo.finished && <span className="finished-label">✅ Finished</span>}
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
