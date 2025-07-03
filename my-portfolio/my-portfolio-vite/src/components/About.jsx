import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm <strong>Amira</strong>, a passionate frontend developer, graphics designer, and UI/UX designer currently pursuing a Software Engineering degree at AASTU.
        </p>
        <p className="about-text">
          I love turning creative ideas into elegant, functional digital experiences. I’ve led teams, worked in internships, joined hackathons, and actively develop myself through ALX, Udacity, Mesirat, and more.
        </p>
        <p className="about-text">
          I’m fluent in English, Amharic, and Arabic, and I believe in using tech to serve both community and global needs.
        </p>
      </div>
    </section>
  );
}

export default About;
