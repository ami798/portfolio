import React from "react";
import "../styles/Resume.css";
import resumePDF from "../assets/resume/Amira-Resume.pdf";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title">My Resume</h2>
      <p className="resume-text">Click the button below to download my latest resume in PDF format.</p>
      <a href={resumePDF} download="Amira-Resume.pdf" className="resume-button">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
