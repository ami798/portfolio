import React from "react";
import "../styles/Projects.css"; // Ensure your CSS is correctly linked

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React, showcasing my skills and projects.",
    link: "https://your-portfolio-link.com",
    img: "/assets/images/project1.jpg",
  },
  {
    title: "E-commerce Website",
    description: "A fully functional e-commerce platform with user authentication and product listing.",
    link: "https://your-ecommerce.com",
    img: "/assets/images/project2.jpg",
  },
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
