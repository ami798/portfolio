// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import avatar from '../assets/avatar.png'; // replace with your own

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="highlight"> Amira Abdurahman</span>
        </motion.h1>
        <motion.p
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
           Frontend Developer | UI/UX Designer | Software Engineer | Graphics Designer 
        </motion.p>

        <div className="social-icons">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://t.me" target="_blank">Telegram</a>
        </div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={avatar} alt="Amira" />
      </motion.div>

      <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
📄 Resume
      </a>
    </section>
  );
}

export default Hero;
