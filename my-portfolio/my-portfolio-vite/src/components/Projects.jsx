import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-name">Hotel Management System</h3>
          <p className="project-description">
            A C++ project with file handling and database integration for managing hotel bookings, payments, and user roles.
          </p>
          <p className="project-tech">C++ | MySQL | File Handling</p>
          <a href="https://github.com/yourusername/hotel-management" target="_blank" rel="noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-name">UI/UX Design for Health App</h3>
          <p className="project-description">
            Designed a full prototype for a mobile app using Figma focused on mental and physical health tracking.
          </p>
          <p className="project-tech">Figma | UX Research | Mobile Design</p>
          <a href="https://www.figma.com/file/xyz123/health-app" target="_blank" rel="noreferrer" className="project-link">
            View Design
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-name">Personal Portfolio Website</h3>
          <p className="project-description">
            This portfolio you're viewing, made using React + Vite with clean responsive design and multiple sections.
          </p>
          <p className="project-tech">React | Vite | CSS</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
