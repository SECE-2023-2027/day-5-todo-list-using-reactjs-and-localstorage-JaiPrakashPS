import React, { useState } from 'react';

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
    finishTodo(todo.id);
  };

  return (
    <li
  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 mb-3 border rounded-lg shadow-sm 
    ${todo.finished ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'} 
    ${todo.completed ? 'line-through text-gray-500' : ''}`}
>

      {isEditing ? (
        <input
          className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          className="flex-1 cursor-pointer text-lg"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {!todo.finished && (
          <button
            onClick={handleFinish}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Finish
          </button>
        )}

        {todo.finished && (
          <span className="text-green-700 font-medium text-sm">✅ Finished</span>
        )}

        <button
          onClick={handleEdit}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
