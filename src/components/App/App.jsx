import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Booking from '../Booking/Booking';
import ContactUs from '../ContactUs/ContactUs';
import Faq from '../Faq/Faq';
import './App.scss';

const App = () => (
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
