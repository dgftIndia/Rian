// src/pages/Home.js
import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import TitleAndVideoSection from '../components/HomePageComponents/TitleAndVideoSection';
import BlueBoxSection from '../components/HomePageComponents/BlueBoxSection';
import TwoVideos from '../components/HomePageComponents/TwoVideos';
import StatsSection from '../components/HomePageComponents/StatsSection';
import Services from '../components/HomePageComponents/Services';
import CustomSection from '../components/HomePageComponents/CustomSection';
import ThreeBoxes from '../components/HomePageComponents/ThreeBoxes';
import Footer from '../components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../pages/Home.css';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>{t('home_title')}</h1>
        <p>{t('home_subtitle')}</p>
        <div className="content-types">
          <button>{t('content_youTubeVideos')}</button>
          <button>{t('content_animatedShows')}</button>
          <button>{t('content_featureFilms')}</button>
          <button>{t('content_corporateVideo')}</button>
          <button>{t('content_documentary')}</button>
          <button>{t('content_audioBooks')}</button>
          <button>{t('content_eLearningVideo')}</button>
          <button>{t('content_commercialAds')}</button>
          <button>{t('content_podcasts')}</button>
          <button>{t('content_videoGames')}</button>
        </div>
        <button className="demo-button">{t('book_a_demo')}</button>
        <TitleAndVideoSection />
        <BlueBoxSection />
        <TwoVideos />
        <StatsSection />
        <Services />
        <CustomSection />
        <ThreeBoxes /> 
        <Footer />
      </header>
    </div>
  );
};

export default Home;