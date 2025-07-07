import React from "react";
import "../styles/Projects.css"; 

const projects = [
  {
    title: "Chocolate-Bliss ",
    description: "A modern, responsive web application for a cake cafe featuring a beautiful UI, interactive search functionality and smooth animations. Built with vanilla JavaScript and Tailwind CSS.",
    link: "https://github.com/ami798/Chocolate-Bliss",
    img: "public/project2.png",
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
