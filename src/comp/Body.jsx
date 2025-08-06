import React, { useState, useEffect } from 'react';
import '../App.css';
import TodoItem from './TodoItem';

function Body() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTitle || !newDescription) {
      return alert("Please fill all fields!");
    }
    const now = new Date();
    const date = now.toLocaleDateString(); // e.g., 8/6/2025
    const time = now.toLocaleTimeString(); // e.g., 1:42:17 AM

    const newTodo = {
      sn: todos.length + 1,
      title: newTitle,
      description: newDescription,
      date: date,
      time: time,
    };

    setTodos([...todos, newTodo]);
    setNewTitle('');
    setNewDescription('');

  };

  // ✅ Export todos to text file
  const handleExport = () => {
    const content = todos.map(todo =>
      `#${todo.sn} - ${todo.title}\n${todo.description}\n(${todo.date} at ${todo.time})\n\n`
    ).join('');

    const blob = new Blob([content], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = href;
    link.download = 'todos.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="body-container">
      <h2 className="body-heading">Add New Todo</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>

        <div className="button-group">
          <button onClick={addTodo}>➕ Add</button>
          <button onClick={handleExport}>📤 Export Todos</button>
        </div>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No todos available. Please add some!</p>
        ) : (
          <>
            <h3>All Todos:</h3>
            {todos.map((todo) => (
              <TodoItem
                key={todo.sn}
                sn={todo.sn}
                title={todo.title}
                description={todo.description}
                date={todo.date}
                time={todo.time}
                onDelete={(sn) => {
                  const filtered = todos.filter((t) => t.sn !== sn);
                  setTodos(filtered.map((t, i) => ({ ...t, sn: i + 1 }))); // reassign sn
                }}
                onUpdate={(sn, updatedTitle, updatedDesc) => {
                  const now = new Date();
                  const updatedTodos = todos.map((t) =>
                    t.sn === sn
                      ? {
                        ...t,
                        title: updatedTitle,
                        description: updatedDesc,
                        date: now.toLocaleDateString(),
                        time: now.toLocaleTimeString(),
                      }
                      : t
                  );
                  setTodos(updatedTodos);
                }}

              />

            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
