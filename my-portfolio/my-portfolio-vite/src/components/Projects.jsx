import React from "react";
import "../styles/Projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";

const projects = [
  {
    title: "Echofy",
    description:
      "Echofy  a Chrome extension developed for the UNESCO Hackathon. It analyzes web content to detect AI-generated or misleading information and promotes media literacy through real-time feedback and educational tips. Currently being refined for public release.",
    link: "https://drive.google.com/file/d/1CpkuNGPktclIwbZTOfWMKsJo2GDDJQ89/view?usp=sharing",
    img: project2,
  },
  {
    title: "Food Bridge",
    description:
      "Food Bridge — a project built during the Cursor Hackathon to connect restaurants, donors and communities in reducing food waste.I led the team from concept to execution, and we proudly secured 4th place in the competition.",
    link: "https://github.com/Team-cursor5",
    img: project4,
  },
  {
    title: "FindMeNow",
    description:
      "FindMeNow is a community-driven web platform that helps find missing persons faster through verified reports and real-time updates.Built live in under 4 hours during a competition and I won! 🏆Public release coming soon demo & details below.",
    link: "https://cursor-live-competition.vercel.app/",
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
