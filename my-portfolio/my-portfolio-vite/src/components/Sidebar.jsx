// src/components/Sidebar.jsx
import React from 'react';
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from 'react-icons/fa';
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
      <a href="#skills" title="Skills">
        <FaCode />
      </a>
      <a href="#projects" title="Projects">
        <FaProjectDiagram />
      </a>
      <a href="#experience" title="Experience">
        <FaBriefcase />
      </a>
      <a href="#education" title="Education">
        <FaGraduationCap />
      </a>
      <a href="#certificates" title="Certificates">
        <FaAward />
      </a>
    </div>
  );
}

export default Sidebar;
