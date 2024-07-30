// Footer.js
import React from 'react';
import './Footer.css';
import {useNavigate} from 'react-router-dom';
import indiaFlag from '../../Assets/images/india.png'; // Adjust the path as needed
import japanFlag from '../../Assets/images/japan.png'; // Adjust the path as needed
import linkedinIcon from '../../Assets/images/youtube.png'; // Adjust the path as needed
import youtubeIcon from '../../Assets/images/Linkedin.png'; // Adjust the path as needed
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const navigate = useNavigate();


    
    return (
        <footer className="footer">
            <div className="footer-top" >
                <h1 data-aos="fade-up">Go beyond global boundaries</h1>
                <br />
                <button className="button" data-aos="fade-up" onClick={()=>navigate("/book-a-demo")}>
          Book A Demo
        </button>
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className="footer-middle">
                <div className="footer-address">
                   
                    <address>
                    <img src={indiaFlag} alt="India Flag" />
                        <p>Rikaian Technology Pvt. Ltd.</p>
                        <p>Office No. 3, S. No. 846,</p>
                        <p>Near Marathwada College,</p>
                        <p>Shivajinagar, Pune 411004.</p>
                        <p>Contact : +91 89561 26959</p>
                    </address>
                </div>
                <div className="footer-address">
                    
                    <address>
                    <img src={japanFlag} alt="Japan Flag" />
                        <p>Rikaian Technology Pvt. Ltd.</p>
                        <p>Fabbit Kyobashi 2F,</p>
                        <p>1-1-5 Central Bldg Chuo-Ku,</p>
                        <p>Tokyo 104-0031</p>
                    </address>
                </div>
                <div className="footer-form">
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="text" name="address" />
                        </label>
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <nav className="footer-nav">
                    <a href="#">Log in</a>
                    <a href="#">Book A Demo</a>
                    <a href="#">Ethic Code</a>
                    <a href="#">Partners</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact us</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </nav>
                <div className="footer-social">
                    <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
                    <p>Email: sales@rian.io</p>
                </div>
                <p>© 2022 Rikaian Technology Pvt. Ltd.</p>
            </div>
        </footer>
    );
}

export default Footer;
