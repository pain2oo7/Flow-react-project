import React from "react";
import Logo from '../assets/footer/Logotype.png';
import Facebook from '../assets/footer/Facebook.png';
import Instagram from '../assets/footer/Instagram.png';
import LinkedIn from '../assets/footer/Linkedin.png';
import { Link } from 'react-router-dom'; 
import './footer.css';
import { useTheme } from '../ThemeSwitch/ThemeContext';

const Footer = () => {
  const { isDarkTheme, themeStyles } = useTheme();

  return (
    <div className="Footer" style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="footer_flex">
        <div className="logo_footer"><Link to="/"><img className="logo_header" src={themeStyles.logo} alt="Logo" /></Link></div>
        <div className="content_footer margin_left_adaptive">
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Platform</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Solutions</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>How it works</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Pricing</p></a>
        </div>
        <div className="content_footer">
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Company</p></a>
          <Link to="/about"><p className="content_footer_p" style={{ color: themeStyles.color }}>About</p></Link>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Our Mission</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Careers <span className="span"></span> </p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Contact</p></a>
        </div>
        <div className="content_footer">
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Resources</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Blog</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Help Center</p></a>
          <a href="#" ><p className="content_footer_p" style={{ color: themeStyles.color }}>Support</p></a>
        </div>
        <div className="social_links">
          <div className="social_footer"><a href="#"><img className="img_social_footer" src={Facebook} alt="Facebook"></img> <p className="social_links_p" style={{ color: themeStyles.color }}>Follow us on Facebook</p></a> </div>
          <div className="social_footer margin_top"><a href="#"><img className="img_social_footer" src={Instagram} alt="Instagram"></img> <p className="social_links_p" style={{ color: themeStyles.color }}>Follow us on Instagram</p></a> </div>
          <div className="social_footer margin_top"><a href="#"><img className="img_social_footer" src={LinkedIn} alt="LinkedIn"></img> <p className="social_links_p" style={{ color: themeStyles.color }}>Follow us on LinkedIn</p></a> </div>
        </div>
      </div>
      <div className="bottom_footer">
        <p className="bottom_footer_p" >© 2024 Flow. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;