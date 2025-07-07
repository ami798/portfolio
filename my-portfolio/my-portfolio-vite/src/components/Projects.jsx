import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Chocolate-Bliss",
    description:
      "A modern, responsive web application for a cake cafe featuring a beautiful UI, interactive search functionality and smooth animations. Built with vanilla JavaScript and Tailwind CSS.",
    link: "https://github.com/ami798/Chocolate-Bliss",
    img: "/project2.png",
  },
  {
    title: "Restaurant App",
    description:
      "A simple front-end web app for the Little Lemon Restaurant. Built using React, Vite and React Router.",
    link: "https://github.com/ami798/Little-Lemon-App.git",
    img: "/project4.png",
  },
  {
    title: "Mela Software",
    description:
      "A visually engaging landing page designed for Mela Software. Built with HTML, Tailwind CSS, and JavaScript. It features scroll effects, testimonials, and highlights product features.",
    link: "https://github.com/ami798/web-contest.git",
    img: "/project1.png",
  },
  {
    title: "Ally-Net",
    description:
      "AllyNet is a digital platform developed for a hackathon to foster inclusion and community support. Built with collaboration in mind and aims to empower users through meaningful engagement.",
    link: "https://github.com/ami798/She-Codes-Hackathon.git",
    img: "/project3.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.img}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      <div className="other-projects">
        <h4>Other Projects</h4>
        <p>
          You can go to my{" "}
          <a
            href="https://github.com/ami798"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          for more projects.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/ami798/portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal Portfolio Website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ami798/P2P-Transaction-Dashboard.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              P2P-Transaction-Dashboard

            </a>
          </li>
          <li>
            <a
              href="https://github.com/ami798/alx-airbnb-database.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Air-BNB DataBase
            </a>
          </li>
          {/* Add more links here */}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
