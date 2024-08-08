import React from "react";
import { Link } from 'react-router-dom'; 
import Man from '../assets/header/Man.png';
import Logos from '../assets/header/Logos.png';
import Icon from '../assets/header/Icon.png';
import styles from './header.css';
import { useTheme } from '../ThemeSwitch/ThemeContext';
import ThemeSwitcher from '../ThemeSwitch/ThemeSwitcher';
import classNames from 'classnames';

const AppHeader = () => {
  const { isDarkTheme, themeStyles } = useTheme();

  return (
    <div className={classNames('header', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme })} style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="navbar">
        <Link to="/"><img className="logo_header" src={themeStyles.logo} alt="Logo" /></Link>
        
        <div className="menu">
          <Link to="/about" style={{ color: themeStyles.color }}>About us</Link>
          <a href="#" style={{ color: themeStyles.color }}>Team</a>
          <a href="#" style={{ color: themeStyles.color }}>Solutions</a>
          <a href="#" style={{ color: themeStyles.color }}>Blog</a>
        </div>
        <button className="btnHeader" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor }}>Get in touch  <b>→</b></button>
        
      </div>
      <div className="line" style={{ borderColor: themeStyles.borderColor }}></div>
      <div className="switcher"><ThemeSwitcher/></div>
    </div>
  );
};

export default AppHeader;