import React from 'react';
import './Booking.scss';

const Booking = () => {
  return (
    <section className='booking-section'>
      <div className="container">
        <div className="booking">
          <h2 className="booking__title title">Book a call</h2>
          <p className="booking__text text">
            The objective of the introductory call is to have a quick meet-and-greet, assess compatibility, and talk about backgrounds, motivations, and what to expect moving forward
          </p>
          <h3 className="booking__subtitle">
            1. Select date and time
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Booking;
