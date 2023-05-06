import React from "react";
import "../styles/Modal.css";

export default function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}