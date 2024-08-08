import React from "react";
import Dot from '../assets/Content pages/Dot.png';
import { useTheme } from '../ThemeSwitch/ThemeContext';
import classNames from 'classnames';
import styles from './about.css';

const AboutUs = () => {
  const { themeStyles } = useTheme();

  return (
    <div className="about_us" style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="container_about" style={{background: themeStyles.backgroundAbout}}>
        <p className="p_about_dot" style={{ color: themeStyles.color }}>
          <img className="img_about" src={Dot} alt="Dot" /> About Us
        </p>
        <div className="about_line" style={{ borderColor: themeStyles.borderColor }}></div>
        <div className="flex_about">
          <div className="left_part_about">
            <h2 className="h2_about" style={{ color: themeStyles.color }}>Committed to a sustainable future</h2>
            <p className="p_about" style={{ color: themeStyles.color }}>
              As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
            </p>
          </div>
          <div className="right_part_about">
            <div className="statistics">
              <h3 className="h3_about" style={{ color: themeStyles.color }}>5,000 Mwh</h3>
              <p className="p_right_part" style={{ color: themeStyles.color }}>Renewable Energy Generated</p>
            </div>
            <div className="statistics">
              <h3 className="h3_about" style={{ color: themeStyles.color }}>2,500+</h3>
              <p className="p_right_part" style={{ color: themeStyles.color }}>Metric Tons of CO2 Reduced</p>
            </div>
            <div className="statistics">
              <h3 className="h3_about" style={{ color: themeStyles.color }}>10,000+</h3>
              <p className="p_right_part" style={{ color: themeStyles.color }}>Customers Served</p>
            </div>
            <div className="statistics">
              <h3 className="h3_about" style={{ color: themeStyles.color }}>15%</h3>
              <p className="p_right_part" style={{ color: themeStyles.color }}>Avg. Energy Saved</p>
            </div>
          </div>
        </div>          
      </div>
    </div>
  );
};

export default AboutUs;