import React from 'react';
import './BookingConf.scss';

const BookingConf = ({ email }) => {
  return (
    <div className='confirmation'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#284657" strokeLinecap="round"/>
      </svg>
      <h3 className="confirmation__title">Booking confirmation</h3>
      <p className="confirmation__text">
        We have sent a confirmation to your email
      </p>
      <span className="confirmation__email">{email}</span>
      <button className='confirmation__btn btn btn_solid'>Go to Email</button>
    </div>
  );
};

export default BookingConf;
