import React, { useState } from 'react';


const HeroSection = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonText) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(buttonText)
        ? prevSelected.filter((text) => text !== buttonText) // Unselect if already selected
        : [...prevSelected, buttonText] // Select if not selected
    );
  };

  return (
    <div className="hero-section">
      <h1 className="title">Dubbing & Localization</h1>
      <h2 className="subtitle">AI Powered with Human Touch</h2>
      <p className="description">Type of Content you can LOCALIZE with Rian</p>
      <div className="content-types">
        {[
          "YouTube Videos",
          "Animated Shows",
          "Feature/Short Films",
          "Corporate video",
          "Documentary",
          "Audio Books",
          "eLearning video",
          "Commercial Ads",
          "Podcasts",
          "Video Games",
        ].map((contentType) => (
          <button
            key={contentType}
            className={`content-button ${
              selectedButtons.includes(contentType) ? "selected" : ""
            }`}
            onClick={() => handleButtonClick(contentType)}
          >
            {contentType}
          </button>
        ))}
      </div>
      <button className="demo-button">Book A Demo</button>
    </div>
  );
};

export default HeroSection;
