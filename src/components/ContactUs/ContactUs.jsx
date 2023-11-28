import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="contact-us">
          <h2 className="contact-us__title title">Contact us</h2>
          <form className="contact-us__form" onSubmit={handleFormSubmit}>
            <div className="input-wrap">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input id="name" type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-wrap">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrap">
              <label htmlFor="text" className="label">
                Text
              </label>
              <textarea
                id="text"
                rows="1"
                className="input contact-us__message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
            </div>
            <button className="contact-us__btn btn btn_solid">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
