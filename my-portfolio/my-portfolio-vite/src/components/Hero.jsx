import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import avatar from '../assets/avatar.png';

import {
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPhone,
  FaDiscord
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Amira Abdurahman</span>
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
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
          <a href="https://www.linkedin.com/in/amira-abdurahman-282704298/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:youremail@example.com"><MdEmail /></a>
          <a href="tel:+251900000000"><FaPhone /></a>
          <a href="https://discord.com/users/yourdiscordid" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
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
