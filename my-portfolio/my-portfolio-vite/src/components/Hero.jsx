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
          <span className="highlight">Amira Abdurahman</span>
        </motion.h1>

        <motion.p
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Aspiring Full-stack developer | UI/UX Designer | Graphics Designer | Community Leader and Trainer 
        </motion.p>

        <div className="social-icons">
          <a href="https://t.me/amiprin7" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
          <a href="https://www.linkedin.com/in/amira-abdurahman-bb7552374" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/amiprin7" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/amiprin7" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://github.com/ami798" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:amiraabdurahman8@gmail.com"><MdEmail /></a>
          <a href="tel:+251923471699"><FaPhone /></a>
          <a href="https://discord.com/users/amiprin7_45524" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
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
