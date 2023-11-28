import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ModalWindow.scss';
import BookingConf from './BookingConf/BookingConf';

const ModalWindow = ({ isOpen, setIsOpen, email }) => {
  const modalRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`modal-background ${isOpen ? ' active' : ''}`}>
      <div className="modal" ref={modalRef}>
        {pathname === '/booking' ? <BookingConf email={email} /> : <></>}
      </div>
    </div>
  );
};

export default ModalWindow;
