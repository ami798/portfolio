import React from "react";
import "../styles/Resume.css";
import resumeDocx from "../assets/resume/resume.docx";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title">My Resume</h2>
      <p className="resume-text">Click the button below to download my resume in Word format (.docx).</p>
      <a href={resumeDocx} download="Amira-Resume.docx" className="resume-button">
        Download Resume (.docx)
      </a>
    </section>
  );
}

export default Resume;
