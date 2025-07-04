// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="#hero" title="Home">
        <FaHome />
      </a>
      <a href="#about" title="About">
        <FaUser />
      </a>
      <a href="#projects" title="Projects">
        <FaProjectDiagram />
      </a>
      <a href="#contact" title="Contact">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default Sidebar;
