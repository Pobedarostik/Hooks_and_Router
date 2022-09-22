import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ photo, toggleModal }) {
  const handlekKeydown = (e) => {
    if (e.code === 'Escape') {
      toggleModal();
      // console.log('Press on Escape');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handlekKeydown);
    return () => {
      window.removeEventListener('keydown', handlekKeydown);
    };
  });

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img className="modalImage" src={photo} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
