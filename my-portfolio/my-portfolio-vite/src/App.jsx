// src/App.jsx
import React from 'react';

import Sidebar from './components/Sidebar'; // we'll add this
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

import './styles/global.css'; // make sure global styles are applied

function App() {
  return (
    <div className="app-container">
      <Sidebar /> {/* left vertical navigation */}
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Footer />
      </main>
    </div>
  );
}

export default App;
