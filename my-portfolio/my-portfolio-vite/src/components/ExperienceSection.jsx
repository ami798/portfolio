import React from "react";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Nov 2018 – Present</div>
          <div className="timeline-content">
            <h3>CEO and Founder</h3>
            <p>
              I’ve founded and run my own tech company which has helped bring a great line of
              incredible and complex products and services to the world. I’m running all aspects
              of business and working to expand and enrich my company.
            </p>
            <ul>
              <li>Handle day to day business and technology directions</li>
              <li>Architected and implemented multiple products and solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
