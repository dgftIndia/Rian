// src/BlueBoxSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './BlueBoxSection.css'; // Import CSS file for styling

const BlueBoxSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation happens every time the component comes into view
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return (
    <div className="blue-box-section">
      <h2
        className="section-header"
        data-aos="fade-up" // AOS attribute
      >
        Take your content global with Rian
      </h2>
      <div
        className="blue-box"
        data-aos="fade-up" // AOS attribute
        data-aos-delay="200" // AOS delay attribute
      >
        <h3 className="box-title">At Rian we believe that exceptional content deserves a global audience.</h3>
      </div>
    </div>
  );
};

export default BlueBoxSection;
