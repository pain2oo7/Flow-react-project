import React from 'react';
import { useTheme } from './ThemeContext';
import classNames from 'classnames';
import styles from './theme_switcher.css';
import night from '../assets/switcher/moon.png'
import day from '../assets/switcher/daylight.png'


const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme, themeStyles } = useTheme();

  return (
    <div className={classNames('theme-switcher-wrap', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme })}>
      <button
        onClick={toggleTheme}
        className={classNames('theme-switcher-button', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme })}
        style={{
          background: 'none',
          border: 'none', 
          padding: 0, 
          cursor: 'pointer',
          marginTop: -44,
          marginLeft: 160,
        }}
      >
        <img
          src={isDarkTheme ? day : night}
          alt={isDarkTheme ? 'Moon icon' : 'Sun icon'}
          style={{
            width: '30px', 
            height: 'auto',
          }}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;





