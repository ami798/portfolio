import React from "react";
import "./SkillsSection.css";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "MongoDB & Postgres", level: 80 },
  { name: "HTML5 & CSS3", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js & Express.js", level: 80 }
];

function SkillsSection() {
  return (
    <div className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <p className="section-description">
        As a full-stack developer, I bring a broad set of technical skills that allow me to deliver
        high-quality web applications. I embrace the challenges of the fast-paced tech industry and
        consistently strive to improve and innovate in every project I work on.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar-container">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
