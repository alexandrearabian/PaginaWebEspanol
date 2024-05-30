// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import MainPageSpanish from './pages/MainPageSpanish';
import BlogPost from './components/BlogPost';
import TopMenu from './components/TopMenu';

function App() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <Router>
      <div className="background-animation">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <div className="ball ball5"></div>
        <div className="ball ball6"></div>
      </div>

      <TopMenu/>
      <Routes>
        <Route path="/" element={<MainPageSpanish language={language} />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
