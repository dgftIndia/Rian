import React, { useState } from 'react';
import './Navbar.css';
import {Link,useNavigate} from 'react-router-dom';
import logo from '../../Assets/images/file.png';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";


const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };




  

 

   return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Rikaian Technologies</span>
        </div>
        <div className="top-bar-right">
          <button onClick={() => changeLanguage(t("lan"))}>{t("lan")==="en"?"English":"日本語"}</button>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-left">
          <div
            className="nav-item"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            {t('nav_solutions')}
          </div>
          <div className="nav-item" onMouseEnter={() => setShowResources(true)} onMouseLeave={() => setShowResources(false)}>
            {t('nav_resources')}
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
          <div className="nav-item" onMouseEnter={() => setShowAbout(true)} onMouseLeave={() => setShowAbout(false)}>
            {t('nav_about')}
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
