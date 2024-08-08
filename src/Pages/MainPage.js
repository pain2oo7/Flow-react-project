import React from 'react';
import Content from '../App/ContentPage/Content';
import AboutUs from '../App/AboutUs/AboutUs';
import MainPage from '../App/MainPage/MainPage';
import AboutUsExtra from '../App/AboutUsExtra/AboutUsExtra';
import Experts from '../App/Experts/Experts';

const MainPageCon = () => {
  return (
    <div>
    <MainPage />
    <Content />
    <AboutUs />
    <AboutUsExtra />
    <Experts />
    </div>
  );
};

export default MainPageCon;