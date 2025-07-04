import React from "react";
import "../styles/Hero.css"; // Ensure your CSS is correctly linked

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content fade-in">
        <h1>Hi, I’m Amira</h1>
        <p>Frontend Developer | UI/UX Designer | Software Engineer</p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
