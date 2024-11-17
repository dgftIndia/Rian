// src/pages/MainPage.js
import React, { useEffect } from 'react';
import CommunityPage from '../components/CommunityPage';
import HeroPage from '../components/HeroPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <section data-aos="fade-up">
          <CommunityPage />
        </section>
        <section data-aos="fade-up">
          <HeroPage />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
