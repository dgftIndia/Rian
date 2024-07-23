import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomSection.css'; // Import your CSS file
import CustomImage from '../../Assets/images/2.gif';

const CustomSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false }); // Initialize AOS with once: true to animate once
    }, []);

    return (
        <section className="custom-section">
            <div className="intro has-mockup" data-aos="fade-up">
                <div className="intro has-24-gap">
                    <h6 className="custom-header-for-localization">End-to-End localization</h6>
                    <p className="custom-text">Submit your source video and download the finished videos with voiceovers and subtitles in your chosen languages</p>
                    <a href="https://app.rian.io/login" className="custom-button" >Signup to Rian</a>
                    <img src={CustomImage} className="custom-image" alt="Custom" />
                </div>
            </div>
        </section>
    );
}

export default CustomSection;
