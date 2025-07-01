// src/components/Hero.jsx
import React from "react";
import "./Hero.css"; // optional: create a separate CSS file if needed

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I’m Amira</h1>
        <p>Frontend Developer | UI/UX Designer | Software Engineer</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
