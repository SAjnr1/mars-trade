import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ScrollToTop from './ScrollToTop.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
});


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);