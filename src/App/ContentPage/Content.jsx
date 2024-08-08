import React, { useEffect } from "react";
import solarEnergy from '../assets/Content pages/solarEnergy.png';
import styles from './content.css';
import { useTheme } from '../ThemeSwitch/ThemeContext';
import classNames from 'classnames';

const Content = () => {
  const { themeStyles } = useTheme();

  useEffect(() => {
    const handleClick = (e) => {
      const contentBtn = e.target;
      const content1 = contentBtn.nextElementSibling;

      const isActive = contentBtn.classList.contains('active');

      if (isActive) {
        content1.style.maxHeight = null;
        contentBtn.classList.remove('active');
      } else {
        const allContentBlocks = document.querySelectorAll('.content1');
        const allButtons = document.querySelectorAll('.content_button');

        allContentBlocks.forEach(block => {
          block.style.maxHeight = null;
        });

        allButtons.forEach(btn => {
          btn.classList.remove('active');
        });

        content1.style.maxHeight = content1.scrollHeight + 'px';
        contentBtn.classList.add('active');
      }
    };

    const contentBtns = document.querySelectorAll('.content_button');
    contentBtns.forEach(btn => btn.addEventListener('click', handleClick));

    return () => {
      contentBtns.forEach(btn => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="content" style={{ background: themeStyles.background, color: themeStyles.color }}>
      <div className="content__container">
        <div className="text-content">
          <h1>Our commitment to green energy is paving the way for a cleaner, healthier planet.</h1>
          <button className="content_button content_button1" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor, borderColor: themeStyles.borderColor }}>EV charging</button>
          <div className="content1">
            <p style={{ color: themeStyles.color }}>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
            <a href="#" style={{ color: themeStyles.color }}>Learn more</a>
          </div>

          <button className="content_button" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor, borderColor: themeStyles.borderColor }}>Solar Energy</button>
          <div className="content1">
            <p style={{ color: themeStyles.color }}>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
            <a href="#" style={{ color: themeStyles.color }}>Learn more</a>
          </div>

          <button className="content_button" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor, borderColor: themeStyles.borderColor }}>Wind Energy</button>
          <div className="content1">
            <p style={{ color: themeStyles.color }}>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
            <a href="#" style={{ color: themeStyles.color }}>Learn more</a>
          </div>

          <button className="content_button" style={{ background: themeStyles.buttonBackground, color: themeStyles.buttonColor, borderColor: themeStyles.borderColor }}>Hydropower</button>
          <div className="content1">
            <p style={{ color: themeStyles.color }}>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
            <a href="#" style={{ color: themeStyles.color }}>Learn more</a>
          </div>
        </div>

        <div className="pic-content">
          <img src={solarEnergy} alt="Energy Logo" />
        </div>
      </div>
      <div className="voidSpace"></div>
    </div>
  );
};

export default Content;