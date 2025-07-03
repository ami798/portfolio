import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">

      <h2 className="resume-title">My Resume</h2>
      <p className="resume-text">Click the button below to download my resume in PDF format.</p>
      <a
        href="/Amira-Resume.pdf"
        download="Amira-Resume.pdf"
        className="resume-button"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;
