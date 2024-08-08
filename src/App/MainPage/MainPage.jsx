import React from "react";
import Man from '../assets/header/Man.png';
import Logos from '../assets/header/Logos.png';
import Icon from '../assets/header/Icon.png';
import { useTheme } from '../ThemeSwitch/ThemeContext';
import classNames from 'classnames';
import styles from './MainPage.css';

const MainPage = () => {
  const { isDarkTheme, themeStyles } = useTheme();

  return (
    <div className={classNames('mainPage', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme })} style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="sidesFlex">
        <div className="leftSide">
          <p><img src={Icon} alt="Icon" /> Powering Tomorrow</p>
          <h1 style={{ color: themeStyles.color }}>The Future of Green Energy</h1>
          <h2 style={{ color: themeStyles.color }}>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</h2>
          <div className="MainPageBtn">
            <button className="btn1" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor }}>See our solutions</button>
            <button className="btn2" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor }}>Get in touch</button>
          </div>
        </div>
        <div className="rightSide">
          <img className="imgMan" src={Man} alt="Man" />
        </div>
      </div>
      <div className="wrap_low_part">
      <div className="MainLine" style={{ borderColor: themeStyles.borderColor }}></div>
      <div className="logosMain">
        <p>Global partners that trusted us</p>
        <img className="logos" src={Logos} alt="Logos" />
      </div>
      <div className="MainLine2" style={{ borderColor: themeStyles.borderColor }}></div>
      </div>
      
    </div>
  );
}

export default MainPage;