// HeroPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cmhero-container" data-aos="fade-up">
      <div className="cmhero-content">
        <h1 className="cmhero-title">Everything you need for building an engaging community</h1>
      </div>
    </div>
  );
};

export default HeroPage;
