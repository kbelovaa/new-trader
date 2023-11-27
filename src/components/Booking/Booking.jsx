import React, { useEffect, useState } from 'react';
import { format, parse } from 'date-fns';
import { callTime, platforms } from '../../constants/booking';
import Calendar from '../Calendar/Calendar';
import './Booking.scss';

const Booking = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().toLocaleDateString());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [displayedEmail, setDisplayedEmail] = useState('');

  useEffect(() => {
    const selectedDay = callTime.filter((day) => day.date >= new Date().toLocaleDateString())[0];
    setSelectedDay(selectedDay.date);
    setSelectedTime(selectedDay.time[0]);
  }, []);

  const handleInputBlur = (setValue, value) => {
    setValue(value);
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking">
          <h2 className="booking__title title">Book a call</h2>
          <p className="booking__text text">
            The objective of the introductory call is to have a quick meet-and-greet, assess compatibility, and talk
            about backgrounds, motivations, and what to expect moving forward
          </p>
          <h3 className="booking__subtitle">1. Select date and time</h3>
          <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          <h3 className="booking__subtitle">2. Select platform</h3>
          <div className="booking__platforms">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlatform(platform)}
                className={`booking__platform ${selectedPlatform === platform ? 'booking__platform_selected' : ''}`}
              >
                <input
                  id={platform}
                  type="radio"
                  value={platform}
                  checked={selectedPlatform === platform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <label htmlFor={platform} className="booking__platform-label">
                  {platform}
                </label>
              </div>
            ))}
          </div>
          <h3 className="booking__subtitle">3. Fill in</h3>
          <form className="booking__form">
            <div className="input-wrap">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleInputBlur(setDisplayedName, name)}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleInputBlur(setDisplayedEmail, email)}
              />
            </div>
          </form>
          <h3 className="booking__subtitle">Summary</h3>
          <div className="booking__summary">
            <p className="booking__text">
              {`${selectedDay} ${format(parse(selectedDay, 'dd.MM.yyyy', new Date()), 'EEE')}, ${selectedTime}`}
            </p>
            <p className="booking__text">{selectedPlatform}</p>
            <p className="booking__text">{displayedName}</p>
            <p className="booking__text">{displayedEmail}</p>
          </div>
          <button className="booking__btn btn btn_solid">Book</button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
