import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={src} alt="Enlarged" />
      </div>
    </div>
  );
};

export default Modal;
