import React, { useEffect } from 'react';
import './Services.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
// import image1 from '../assets/rianImagePlatform.png';
// import image2 from '../assets/videolocalization.png';
// import image3 from '../assets/documentation1.png';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation happens only once per element
    });
  }, []);

  return (
    <div className="services-container">
      <h3  data-aos="fade-up">Services We Offer</h3>

      <div className="service-boxes">
        <div className="service-box blue" data-aos="fade-up">
          {/* <img src={image1} alt="Service 1" /> */}
          <h4>Rian Platform</h4>
          <p>Seamlessly blend AI and Human Intelligence to overcome language barriers.</p>
        </div>

        <div className="service-box violet" data-aos="fade-up" data-aos-delay="200">
          {/* <img src={image2} alt="Service 2" /> */}
          <h4>Video Localization</h4>
          <p>Simple, Quick, and Effortless process with project management features!</p>
        </div>

        <div className="service-box yellow" data-aos="fade-up" data-aos-delay="400">
          {/* <img src={image3} alt="Service 3" /> */}
          <h4>Document Translation/ Localization</h4>
          <p>Revolutionize Content Localization.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
