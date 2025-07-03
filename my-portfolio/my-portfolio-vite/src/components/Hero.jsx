// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero-section">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Amira</h1>
      <p className="text-lg md:text-2xl mb-6">
        Frontend Developer | UI/UX Designer | Software Engineer
      </p>
      <a
        href="#projects"
        className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
