import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="title">Dubbing & Localization</h1>
      <h2 className="subtitle">AI Powered with Human Touch</h2>
      <p className="description">Type of Content you can LOCALIZE with Rian</p>
      <div className="content-types">
        <button className="content-button">YouTube Videos</button>
        <button className="content-button">Animated Shows</button>
        <button className="content-button">Feature Films/Short Films</button>
        <button className="content-button">Corporate video</button>
        <button className="content-button">Documentary</button>
        <button className="content-button">Audio Books</button>
        <button className="content-button">eLearning video</button>
        <button className="content-button">Commercial Ads</button>
        <button className="content-button">Podcasts</button>
        <button className="content-button">Video Games</button>
      </div>
      <button className="demo-button">Book A Demo</button>
      
    </div>
    
  );
};

export default HeroSection;
