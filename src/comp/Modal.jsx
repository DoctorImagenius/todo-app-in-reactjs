import React from 'react';
import '../App.css';

function Modal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-content">{content}</p>
        <button className="modal-close" onClick={onClose}>❌ Close</button>
      </div>
    </div>
  );
}

export default Modal;
