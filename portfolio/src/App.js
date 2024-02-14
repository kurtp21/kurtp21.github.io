import "./styles/tailwind.css"

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
      setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
      });
  };

useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    console.log(windowSize.width, windowSize.height);

    return () => {
        window.removeEventListener('resize', updateWindowSize);
    };

}, []); 

  return (
    <div className='flex flex-col justify-between min-w-screen min-h-screen scrollbar-hide'>
      <Header width={ windowSize.width } />
      <div className="min-w-screen min-h-screen mx-8 lg:mx-20 overflow-hidden">
        <Routes>
          <Route path="/" element={ <Home width={ windowSize.width } /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
