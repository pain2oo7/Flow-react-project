import React from "react";
import Lines from '../assets/Content pages/Lines.png';
import { useTheme } from '../ThemeSwitch/ThemeContext';
import classNames from 'classnames';
import './about_us_extra.css';

const AboutUsExtra = () => {
  const { isDarkTheme, themeStyles } = useTheme();

  return (
    <div className={classNames('AboutUsExtra', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme })} style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="content_extra">
        <h2 className="h2_extra" style={{ color: themeStyles.color }}>About us</h2>
        <p className="p_extra" style={{ color: themeStyles.color }}>
          At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
        </p>
        <button className="btn_extra" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor }}>Read more</button>
      </div>
      <div className="voidSpace"></div>
    </div>
  );
};

export default AboutUsExtra;