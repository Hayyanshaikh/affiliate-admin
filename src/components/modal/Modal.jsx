import React from 'react';
import * as Icons from 'react-icons/tb';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  const modalClassName = `modal-overlay ${isOpen ? 'active' : ''}`;
  const contentClassName = `modal-content ${isOpen ? 'active' : ''}`;

  return (
    <div className={`${modalClassName}`}>
      <div className={contentClassName}>
        <button className="close-button" onClick={onClose}>
          <Icons.TbX />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
