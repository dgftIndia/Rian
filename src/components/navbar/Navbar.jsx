import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/rianhd.png';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './langugeSelector.jsx';

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const resourcesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(currentScrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
      setShowResources(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setShowAbout(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="top-bar-left">
          <span></span>
        </div>
        <div className="top-bar-right">
          <LanguageSelector />
        </div>
      </div>
      <div className="navbar">
        <div className="nav-center">
          <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
        </div>
        <div className="nav-right flex items-center justify-between w-full px-8">
     {/* Grouped nav items with equal spacing */}
      <div className="flex items-center space-x-6">
      <div ref={aboutRef} className="nav-item" onClick={() => setShowAbout((prev) => !prev)}>
      <span>{t('nav_about')}</span>
      <div className={`dropdown ${showAbout ? 'dropdown-show' : ''}`}>
        <div className="dropdown-item">{t('nav_company_profile')}</div>
      </div>
    </div>
    <Link to="/blogs" className="nav-item">
      {t('nav_blogs')}
    </Link>
    <div ref={resourcesRef} className="nav-item" onClick={() => setShowResources((prev) => !prev)}>
      <span>{t('nav_resources')}</span>
      <div className={`dropdown ${showResources ? 'dropdown-show' : ''}`}>
        <Link to="/press-release" className="dropdown-item">
          {t('nav_press_release')}
        </Link>
        <Link to="/events" className="dropdown-item">
          {t('nav_events')}
        </Link>
        <Link to="/communityPage" className="dropdown-item">
          {t('nav_community_page')}
        </Link>
      </div>
    </div>
    <Link to="https://app.rian.io/registervendor" className="nav-item">
      {t('nav_vendor_registration')}
    </Link>
    <Link to="https://app.rian.io/login" className="nav-item">
      {t('nav_login')}
    </Link>
  </div>

  {/* "Book a Demo" button aligned to the far right */}
  <button className="button" onClick={() => navigate('/book-a-demo')}>
    {t('nav_book_demo')}
  </button>
</div>


      </div>
    </div>
  );
};

export default Navbar;
