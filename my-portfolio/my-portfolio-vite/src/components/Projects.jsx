import React from "react";
import "../styles/Projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    title: "Chocolate-Bliss",
    description:
      "A modern, responsive web application for a cake cafe featuring a beautiful UI, interactive search functionality and smooth animations. Built with vanilla JavaScript and Tailwind CSS.",
    link: "https://github.com/ami798/Chocolate-Bliss",
    img: project2,
  },
  {
    title: "Restaurant App",
    description:
      "A simple front-end web app for the Little Lemon Restaurant. Built using React, Vite and React Router.",
    link: "https://github.com/ami798/Little-Lemon-App.git",
    img: project4,
  },
  {
    title: "Mela Software",
    description:
      "A visually engaging landing page designed for Mela Software. Built with HTML, Tailwind CSS, and JavaScript. It features scroll effects, testimonials, and highlights product features.",
    link: "https://github.com/ami798/web-contest.git",
    img: project1,
  },
  {
    title: "Ally-Net",
    description:
      "AllyNet is a digital platform developed for a hackathon to foster inclusion and community support. Built with collaboration in mind and aims to empower users through meaningful engagement.",
    link: "https://github.com/ami798/She-Codes-Hackathon.git",
    img: project3,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>My Projects</h2>
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
        <h4 style={{ fontSize: "1.8rem", marginTop: "3rem" }}>Other Projects</h4>
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
        </ul>
      </div>
    </section>
  );
}

export default Projects;
