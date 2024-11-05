import React from 'react';

const PressRelease = () => {
  return (
    <div className="press-release-container">
      {/* Hero Section */}
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Rian.io Partners with LipDub AI to Enhance AI-Driven Dubbing and Video Localization for Global Brands
            </h1>
            <p className="hero-description">
              Together, Rian and LipDub will swiftly dub content while preserving the emotional impact and subtle cultural cues of the original thanks to LipDub's cutting-edge lip-sync technology.
            </p>
          </div>
          <div className="partnership-box">
            <div className="partnership-container">
              <div className="partnership-title">
                STRATEGIC PARTNERSHIP
              </div>
              <div className="logo-container">
                <div className="logo">
                  <img 
                    src="my-app/src/Assets/images/rianimg.png" 
                    alt="Rian Logo" 
                  />
                </div>
                <div className="divider"></div>
                <div className="logo">
                  <img 
                    src="/api/placeholder/96/96" 
                    alt="LipDub AI Logo" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-left">
          <h2 className="content-title">
            Rian.io Partners with LipDub AI to Enhance AI-Driven Dubbing and Video Localization for Global Brands
          </h2>
          
          <div className="content-text">
            <p className='paragraph'>
              [Pune, Maharashtra] - [08-07-24] - Rian AI, a company offering cutting-edge AI-powered dubbing and content localization solutions, today, announced a strategic partnership with LipDub AI, a leader in AI-based lip-syncing technology. This collaboration will empower LipDub AI to leverage Rian's advanced and meritorious AI technology to supply and cater to the growing demand for video localization, personalization, and transcreation services.
            </p>
            
            <p className='paragraph'>
            LipDub AI’s advanced lip-syncing capabilities, coupled with Rian’s expertise in human-assisted translation will produce and deliver unparalleled video localization experiences for corporations aiming to penetrate foreign and regional markets. The incorporation of this technology guarantees precise translations through AI dubbing, which provides voice tonality and style matching. Additionally, it also creates realistic lip movements, which enhances the connection with audiences on a global scale.           
            </p>
            <p className='paragraph'>
            Anandsagar Shiralkar, CEO & Founder at Rian.io said, "At Rian, we are constantly seeking ways to push the boundaries of localization technology"
            </p>
            <p className='paragraph'>
            Nishant Jadhav, Co-Founder and Chief Growth Officer added, "LipDub AI's technology is a perfect complement to our existing solutions of AI dubbing, allowing us to offer a truly seamless and immersive experience for global brands in almost all including the Media industry."
            </p>
            <p className='paragraph'>
            “We are thrilled to partner with Rian.io, a leader in the localization industry,” said Andrew More, VP of Sales at LipDub AI. “By combining our solutions, we can empower businesses to connect with international audiences on a deeper level through high-quality, culturally relevant video content.”
            </p>
            <p className='paragraph'>
            This significant, strategic collaboration marks a major achievement in the field of video localization. Through the combined use of AI technology, Rian and LipDub AI are addressing the need for affordable and adaptable solutions, allowing international brands to access new regional and foreign markets, and enhance the reach of their content.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-content">
            <h3 className="sidebar-title">
              Dubbing & Localization
            </h3>
            <p className="sidebar-description">
              AI Powered with Human Touch
            </p>
            <button className="demo-button">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRelease;