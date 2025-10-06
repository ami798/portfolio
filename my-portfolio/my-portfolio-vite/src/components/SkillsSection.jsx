import React from "react";
import "./SkillsSection.css";

const skills = [
  { name: "React", level: 90 },
  { name: "Django", level: 80 },
  { name: "MongoDB ", level: 80 },
  { name: "HTML5 & CSS3", level: 100},
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma", level: 95 },
  { name: "Python", level: 85 },
{ name: "Next.js", level: 80 },
{ name: "DSA", level: 80 },
{ name: "Adobe Illustrator and Photoshop", level: 95 },
  // Add more skills here as needed
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2 className="skills-heading">SKILLS</h2>
      <p className="skills-intro">
       I specialize in frontend development with a strong eye for design, combining my skills in UI/UX and graphic design to build intuitive and visually compelling web interfaces. My toolkit includes technologies like HTML, CSS, JavaScript and React, as well as design tools such as Figma and Adobe Creative Suite. I also have hands-on experience in responsive design, accessibility and performance optimization. Currently, I’m actively expanding my skills toward full-stack development, constantly learning new technologies to build more dynamic, end-to-end solutions.

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
