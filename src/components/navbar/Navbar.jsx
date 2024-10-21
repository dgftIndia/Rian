import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/rianhd.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Scroll event logic
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Rikaian Technologies</span>
        </div>
        <div className="top-bar-right">
          <button onClick={() => changeLanguage(t("lan"))}>
            {t("lan") === "en" ? "English" : "日本語"}
          </button>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-left">
          <div className="nav-item">
            <span onClick={() => setShowResources(!showResources)}>
              {t('nav_resources')}
            </span>
            {showResources && (
              <div className="dropdown">
                <Link to="/press-release" className="dropdown-item">
                  {t('nav_press_release')}
                </Link>
                <Link to="/events" className="dropdown-item">
                  {t('nav_events')}
                </Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <span onClick={() => setShowAbout(!showAbout)}>
              {t('nav_about')}
            </span>
            {showAbout && (
              <div className="dropdown">
                <div className="dropdown-item">{t('nav_company_profile')}</div>
              </div>
            )}
          </div>
          <Link to="/blogs" className="nav-item">
            {t('nav_blogs')}
          </Link>
        </div>
        <div className="nav-center">
          <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
        </div>
        <div className="nav-right">
          <Link to="https://app.rian.io/registervendor" className="nav-item">
            {t('nav_vendor_registration')}
          </Link>
          <Link to="https://app.rian.io/login" className="nav-item">
            {t('nav_login')}
          </Link>
          <button className="button" onClick={() => navigate('/book-a-demo')}>
            {t('nav_book_demo')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
