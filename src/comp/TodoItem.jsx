// TodoItem.js
import React, { useState } from 'react';
import '../App.css'; // using same global CSS

function TodoItem({ sn, title, description, date, time, onDelete, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdateClick = () => {
    if (editMode) {
      onUpdate(sn, updatedTitle, updatedDescription);
    }
    setEditMode(!editMode);
  };

  return (
    <div className="todo-item">
      {editMode ? (
        <>
          <input
            type="text"
            className="todo-edit-input"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            className="todo-edit-textarea"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <h4 className="todo-title">{sn}. {title}</h4>
          <p className="todo-description">{description}</p>
          <p className="todo-meta">📅 {date} 🕒 {time}</p>
        </>
      )}
      <div className="todo-buttons">
        <button onClick={handleUpdateClick}>
          {editMode ? '💾 Save' : '✏️ Update'}
        </button>

        {!editMode && (
          <button onClick={() => onDelete(sn)}>🗑️ Delete</button>
        )}
      </div>

    </div>
  );
}

export default TodoItem;
