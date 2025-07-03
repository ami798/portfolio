import React from "react";
import "../styles/About.css"; // Ensure your CSS is correctly linked

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Professional Image */}
        <img src="/amira-photo.png" alt="Amira" className="about-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I’m Amira, a passionate Frontend Developer, UI/UX Designer, and Graphics Designer. Currently, I am working on
            building scalable and responsive web applications using the latest technologies like React, Vite, Tailwind CSS, and more. 
            I'm excited to apply my skills and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
