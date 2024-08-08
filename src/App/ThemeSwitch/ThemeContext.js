import React, { createContext, useState, useContext } from 'react';
import Logo from '../assets/header/Logotype.png';
import Logo_dark from '../assets/header/Logotype-dark.png';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeStyles = {
    background: isDarkTheme ? '#333' : '#FFF',
    color: isDarkTheme ? '#FFF' : '#000',
    buttonBackground: isDarkTheme ? '#555' : '#DDD',
    buttonColor: isDarkTheme ? '#FFF' : '#000',
    borderColor: isDarkTheme ? '#6b6b6b' : '#333',
    logo: isDarkTheme ? Logo_dark : Logo,
    backgroundAbout: isDarkTheme ? '#302f2d' : '#FFF7ED',
    backgroundImage: isDarkTheme ? 'url(../assets/Content\ pages/Lines.png)' : 'url(../assets/Content\ pages/Lines.png)'
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);