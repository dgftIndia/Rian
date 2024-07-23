// src/TwoVideos.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './TwoVideos.css'; // Import CSS file for styling

const videos = [
  {
    src: "https://www.youtube.com/embed/pt4V9_hLw_A?rel=0&modestbranding=1&si=ysAAyd5_7ohxwRsA",
    thumbnail: "https://img.youtube.com/vi/pt4V9_hLw_A/maxresdefault.jpg",
    description: "AI Dubbing + LipMatch",
  },
  {
    src: "https://www.youtube.com/embed/XHN9qfPEStc?rel=0&modestbranding=1&si=-B-SEH81HZEWvMVq",
    thumbnail: "https://img.youtube.com/vi/XHN9qfPEStc/maxresdefault.jpg",
    description: "AI Dubbing",
  },
];

const TwoVideos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation happens every time the component comes into view
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return (
    <section>
      <h1
        className="video-title"
        data-aos="fade-up" // AOS attribute
      >
        AI and Human Voice
      </h1>
      <br />
      <div className="video-container-youtube">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-youtube"
            data-aos="fade-up" // AOS attribute
            data-aos-delay={index * 200} // Staggered animation delay
          >
            <img src={video.thumbnail} alt="Video thumbnail" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                style={{ fill: '#FA5252' }}
              >
                <g
                  fill="#ff0000"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: 'normal' }}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,15.464v-6.928l6,3.464z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoVideos;
