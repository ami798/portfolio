import React from "react";
import "./SkillsSection.css";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "MongoDB & Postgres", level: 80 },
  { name: "HTML5 & CSS3", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma", level: 95 },
  { name: "Tailwind", level: 85 },
{ name: "Next.js", level: 80 },

  // Add more skills here as needed
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2 className="skills-heading">SKILLS</h2>
      <p className="skills-intro">
        As a full-stack developer, I bring a broad set of technical skills that allow me to deliver
        high-quality web applications. I embrace the challenges of the fast-paced tech industry and
        consistently strive to improve and innovate in every project I work on.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
