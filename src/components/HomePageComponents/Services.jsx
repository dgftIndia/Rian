import React, { useEffect } from 'react';
// import './Services.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
// import image1 from '../assets/rianImagePlatform.png';
// import image2 from '../assets/videolocalization.png';
// import image3 from '../assets/documentation1.png';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of the animation
      once: false, // Animation happens only once per element
    });
  }, []);

  return (
    <div className="services-container">
      <h3  data-aos="fade-up">Why Choose Rian?</h3>

      <div className="service-boxes">
        <div className="service-box blue" data-aos="fade-up">
          {/* <img src={image1} alt="Service 1" /> */}
          <h4>Speed : 2.5X</h4>
          <p>The endless wait for production houses and investment of multiple hours to localize content and making it available in varied languages and geographies are things of the past. Rian shortens your time to market by 40%

        </p>
        </div>

        <div className="service-box violet" data-aos="fade-up" data-aos-delay="200">
          {/* <img src={image2} alt="Service 2" /> */}
          <h4>Innovative Tech</h4>
          <p>Rian TTS brings emotions to life in multiple languages. It doesn't matter if you are unaware of the target language, our native linguists and innovative technology will take care of emotions and preferential pronunciations.

          </p>
        </div>

        <div className="service-box yellow" data-aos="fade-up" data-aos-delay="400">
          {/* <img src={image3} alt="Service 3" /> */}
          <h4>Impacting Revenues</h4>
          <p>Innovative technology enables our teams to deliver localized content in multiple languages, faster than ever before, reducing time to market and growing revenue.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
