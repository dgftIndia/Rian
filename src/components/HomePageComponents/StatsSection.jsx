// src/components/StatsSection.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useCountUp from '../../hooks/useCountUp';
// import './StatsSection.css';

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count1 = useCountUp(6500, 2000);
  const count2 = useCountUp(200, 2000);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const handleScroll = () => {
      if (!hasAnimated && window.scrollY > document.querySelector('.stats-section').offsetTop - window.innerHeight) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="stats-section">
      <div className="stat-item" data-aos="fade-up">
        <h2 className="stat-number">{hasAnimated ? count1 : 0}+</h2>
        <p>Active users globally</p>
      </div>
      <div className="divider" />
      <div className="stat-item" data-aos="fade-up">
        <h2 className="stat-number">Get in touch today and unlock the potential of your content!</h2>
      </div>
      <div className="divider" />
      <div className="stat-item" data-aos="fade-up">
        <h2 className="stat-number">{hasAnimated ? count2 : 0}+</h2>
        <p>Global Clients</p>
      </div>
    </div>
  );
};

export default StatsSection;
