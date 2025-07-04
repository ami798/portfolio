import React from "react";
import "../styles/About.css"; // Ensure your CSS is correctly linked

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container fade-in">
        <img
          src="/amira-photo.png"
          alt="Amira"
          className="about-photo"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Amira, a passionate Frontend Developer and UI/UX Designer. I build
            responsive, user-first web experiences using React, Vite, and modern tools.
          </p>
          <p>
            Currently studying Software Engineering at AASTU and leading the
            Da’ewa department in the Muslim Students League. Fluent in English,
            Amharic, and Arabic. Let’s create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
