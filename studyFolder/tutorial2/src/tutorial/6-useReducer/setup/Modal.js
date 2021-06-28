import React, { useEffect } from 'react';

//passes modalContent
const Modal = ({ modalContent, closeModal }) => {
  // closes the modal after the time passed
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  //displays the modal content
  return <div className='modal'>{modalContent}</div>;
};

export default Modal;
