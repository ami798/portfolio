import React from 'react';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
