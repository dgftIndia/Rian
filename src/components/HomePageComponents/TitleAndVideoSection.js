  import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './TitleAndVideoSection.css'; // Import CSS file for styling

const TitleAndVideoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Change to false so animation happens every time
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="title-and-video-section">
      <h2
        className="section-title"
        data-aos="fade-up" // AOS attribute
      >
        Use Cases
      </h2>
      <div
        className="video-container"
        data-aos="fade-up" // AOS attribute
        data-aos-delay="300" // AOS delay attribute
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1pS7yX15NxI?rel=0&modestbranding=1&si=GVWcNUcRZea1JU0k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TitleAndVideoSection;
