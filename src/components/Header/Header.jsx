import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const whyRef = useRef(null);
  const lessonsRef = useRef(null);
  const pricingRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
  };

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="content">
      <div className="container">
        <header className="header">
          <span className="header__label" onClick={() => navigate('/')}>
            Newtrader.net
          </span>
          <nav className="header__menu">
            <ul className="header__links">
              <li className="header__link" onClick={() => handleScroll(whyRef)}>
                Why trading
              </li>
              <li className="header__link" onClick={() => handleScroll(lessonsRef)}>
                How it works
              </li>
              <li className="header__link" onClick={() => handleScroll(pricingRef)}>
                Pricing
              </li>
            </ul>
          </nav>
          <div className="burger" onClick={toggleMenu}>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
          </div>
        </header>
      </div>
      <Outlet context={{ whyRef, lessonsRef, pricingRef }} />
      <Footer />
    </div>
  );
};

export default Header;
