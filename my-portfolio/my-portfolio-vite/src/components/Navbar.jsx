import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#hero" className="logo">Amira</a>
      </div>

      <div className="nav-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
