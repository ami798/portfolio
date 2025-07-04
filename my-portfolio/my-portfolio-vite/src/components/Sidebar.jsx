import React from "react";
import {
FaHome,
FaUser,
FaProjectDiagram,
FaCertificate,
FaBriefcase,
FaGraduationCap,
FaTools
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
return (
<div className="sidebar">
<a href="#hero" title="Home" className="sidebar-icon">
<FaHome color="#00bcd4" />
</a>
<a href="#about" title="About Me" className="sidebar-icon">
<FaUser color="#2196f3" />
</a>
<a href="#projects" title="Projects" className="sidebar-icon">
<FaProjectDiagram color="#9c27b0" />
</a>
<a href="#skills" title="Skills" className="sidebar-icon">
<FaTools color="#ff9800" />
</a>
<a href="#experience" title="Experience" className="sidebar-icon">
<FaBriefcase color="#4caf50" />
</a>
<a href="#education" title="Education" className="sidebar-icon">
<FaGraduationCap color="#f44336" />
</a>
<a href="#certificates" title="Awards / Certificates" className="sidebar-icon">
<FaCertificate color="#795548" />
</a>
</div>
);
}

export default Sidebar;