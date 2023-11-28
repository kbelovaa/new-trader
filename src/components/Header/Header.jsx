import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const whyRef = useRef(null);
  const lessonsRef = useRef(null);
  const pricingRef = useRef(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [pathname]);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className="header">
            <span className="header__label" onClick={() => navigate('/')}>
              Newtrader.net
            </span>
            <nav className={showNav ? 'header__menu' : 'hidden'}>
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
            <div className="burger" onClick={() => setIsBurgerMenuOpen(true)}>
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
            </div>
          </div>
        </div>
      </header>
      <Outlet context={{ whyRef, lessonsRef, pricingRef }} />
      <Footer />
      <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
    </div>
  );
};

export default Header;
