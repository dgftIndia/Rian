// src/components/HomePageComponents/VideoComponent.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './VideoSection.css'; // Assuming you put your CSS in this file

const VideoComponent = ({ videos }) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
  
    useEffect(() => {
      const modal = document.getElementById("videoModal");
      const span = document.getElementsByClassName("close")[0];
      const modalVideo = document.getElementById("modalVideo");
  
      const videoContainers = document.querySelectorAll('.video-youtube');
  
      videoContainers.forEach((container, index) => {
        container.addEventListener('click', function() {
          const src = container.getAttribute('data-src');
          const title = container.getAttribute('data-title');
          if (window.innerWidth > 768) {
            modal.style.display = "block";
            modalVideo.src = src + "&autoplay=1";
            modalVideo.title = title;
          } else {
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '315';
            iframe.src = src + "&autoplay=1";
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.title = title;
            container.innerHTML = '';
            container.appendChild(iframe);
          }
        });
      });
  
      span.onclick = function() {
        modal.style.display = "none";
        modalVideo.src = "";
        modalVideo.title = "";
      }
  
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
          modalVideo.src = "";
          modalVideo.title = "";
        }
      }
    }, []);
  
    return (
      <div>
        {/* <h1 className="video-title" data-aos="fade-up">Use Cases</h1> */}
        
        <div className="video-container-youtube">
          {videos.map((video, index) => (
            <div key={index} className="video-youtube" data-aos="fade-up" data-src={video.src} data-title={video.title}>
              <img src={video.thumbnail} alt="Video thumbnail" />
              <div className="play-icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"
                  style={{ fill: '#FA5252' }}>
                  <g fill="#ff0000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,15.464v-6.928l6,3.464z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
  
        <div id="videoModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <iframe id="modalVideo" width="660" height="415" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoComponent;
