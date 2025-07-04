// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import avatar from "../assets/avatar.png"; // Make sure this file exists

function Hero() {
  return (
    <section className="hero">
      {/* Top-right resume button */}
      <a
        href="/resume.pdf"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 Get My CV
      </a>

      {/* Left side content */}
      <div className="hero-left">
        <h1>
          Hi, I’m <span className="highlight">Amira</span>
        </h1>
        <p className="typewriter">
          Frontend Developer | UI/UX Designer | Software Engineer
        </p>

        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>

      {/* Right side avatar */}
      <div className="hero-right">
        <img src={avatar} alt="Amira" />
      </div>
    </section>
  );
}

export default Hero;
