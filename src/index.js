import React from 'react';
import ReactDOM from 'react-dom/client';
import './AppMain/index.css';
import App from './AppMain/App.jsx';
import { ThemeProvider } from './App/ThemeSwitch/ThemeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);