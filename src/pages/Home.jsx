// src/pages/Home.js
import React, { useEffect } from 'react';


import BlueBoxSection from '../components/HomePageComponents/BlueBoxSection';
import VideoSection from '../components/HomePageComponents/VideoSection';


import StatsSection from '../components/HomePageComponents/StatsSection';
import Services from '../components/HomePageComponents/Services';
import CustomSection from '../components/HomePageComponents/CustomSection';
// import ThreeBoxes from '../components/HomePageComponents/ThreeBoxes';
import HeroSection from '../components/HomePageComponents/HeroSection';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import '../pages/Home.css';
// import { useTranslation } from 'react-i18next';
import Base from "../components/navbar/Base";


const Home = () => {
  // const { t } = useTranslation();



  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, []);

  const videos1 = [
    {
      src: "https://www.youtube.com/embed/1pS7yX15NxI?rel=0&modestbranding=1",
      thumbnail: "https://img.youtube.com/vi/1pS7yX15NxI/maxresdefault.jpg",
      title: "Video 1: Introduction to Our Services"
    },
    {
      src: "https://www.youtube.com/embed/vP-t7Ci9QEs?rel=0&modestbranding=1",
      thumbnail: "https://img.youtube.com/vi/vP-t7Ci9QEs/maxresdefault.jpg",
      title: "Video 2: Client Testimonial"
    }
  ];

  const videos2 = [
    {
      src: "https://www.youtube.com/embed/pt4V9_hLw_A?rel=0&modestbranding=1&si=ysAAyd5_7ohxwRsA",
      thumbnail: "https://img.youtube.com/vi/pt4V9_hLw_A/maxresdefault.jpg",
      title: "Video 1: Introduction to Our Services"
    },
    {
      src: "https://www.youtube.com/embed/XHN9qfPEStc?rel=0&modestbranding=1&si=-B-SEH81HZEWvMVq",
      thumbnail: "https://img.youtube.com/vi/XHN9qfPEStc/maxresdefault.jpg",
      title: "Video 2: Client Testimonial"
    }
  ];

  return (
    <Base>
  
    
    <div className="App">
      
      <header className="App-header">
      
        <HeroSection />
        
        <h2 className="subtitle"  data-aos="fade-up">Reach a Global Audience: Seamless Video Localization</h2>
        <h2 className="subtitle"  data-aos="fade-up">Use Cases</h2>
         
        <VideoSection videos={videos1} />
          
        
         
        
        <BlueBoxSection />
        <h2 className="subtitle"  data-aos="fade-up">AI and Human voice</h2>
        <VideoSection videos={videos2} />
        <StatsSection />
        <Services />
        <CustomSection />
        {/* <ThreeBoxes />  */}
        
      </header>
    </div>
    </Base>
  );
};

export default Home;