import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
   <form onSubmit={handleSubmit} className="flex gap-2 w-full">
  <input
    type="text"
    placeholder="Add a new task..."
    className="flex-grow px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button
    type="submit"
    className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 shadow-md"
  >
    Add
  </button>
</form>

  );
}

export default TodoForm;
