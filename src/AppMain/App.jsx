import './App.css';
import AppHeader from '../App/AppHeader/header';
import MainPage from '../App/MainPage/MainPage';
import Footer from '../App/AppFooter/Footer';
import MainPageCon from '../Pages/MainPage'; 
import AboutPage from '../Pages/AboutPage'; 
import { ThemeProvider } from '../App/ThemeSwitch/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPageCon />} />
          <Route path="/about" element={<AboutPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;