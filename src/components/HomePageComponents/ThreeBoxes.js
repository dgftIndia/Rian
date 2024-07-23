import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ThreeBoxes.css';
import serviceImage from '../../Assets/images/box1.gif'; // Update the path to your image
import serviceImageTwo from '../../Assets/images/cover-2.gif';
import serviceImageThree from '../../Assets/images/cover-3.gif';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-section">
      <h2 className="services-title">Services we Offer</h2>
      <div className="services-content">


        <div className="services-left" data-aos="fade-right">
          <h3 className="services-subtitle">Rian: Your Bridge to Global Communication Excellence</h3>
          <ul className="services-list">
            <li className="services-item">
              <span className="checkmark">✔</span>
              User friendly platform functionality
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              DIY demo videos + training support if needed
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              Standard and customized subscription patterns
            </li>
          </ul>
          <button className="demo-button">Book A Demo</button>
        </div>
        <div className="services-right" data-aos="fade-left">
          <img src={serviceImage} alt="Service" className="services-image" />
        </div>




        <div className="services-right" data-aos="fade-right">
          <img src={serviceImageTwo} alt="Service" className="services-image" />
        </div>
        <div className="services-left" data-aos="fade-left">
          <h3 className="services-subtitle">
          Seamlessly Captivate Global Audiences with Our Video Localization Expertise</h3>
          <ul className="services-list">
            <li className="services-item">
              <span className="checkmark">✔</span>
              Touch of local nuance
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              Streamlined proecess
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              Secure processing within the platform
            </li>
          </ul>
          <button className="demo-button">Book A Demo</button>
        </div>
       
        
        <div className="services-left" data-aos="fade-right">
          <h3 className="services-subtitle">Rian: Your Bridge to Global Communication Excellence</h3>
          <ul className="services-list">
            <li className="services-item">
              <span className="checkmark">✔</span>
              User friendly platform functionality
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              DIY demo videos + training support if needed
            </li>
            <li className="services-item">
              <span className="checkmark">✔</span>
              Standard and customized subscription patterns
            </li>
          </ul>
          <button className="demo-button">Book A Demo</button>
        </div>
        <div className="services-right" data-aos="fade-left">
          <img src={serviceImageThree} alt="Service" className="services-image" />
        </div>






      </div>
    </div>
  );
};

export default Services;
