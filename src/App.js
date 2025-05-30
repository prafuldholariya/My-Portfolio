import React, { useState, useEffect } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    // Update the `data-theme` attribute on the root element
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

return (
    <div className={`App`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Background isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
