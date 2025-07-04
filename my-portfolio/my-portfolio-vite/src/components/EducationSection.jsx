import React from "react";
import "./EducationSection.css";

function EducationSection() {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2019 – 2024</div>
          <div className="timeline-content">
            <h3>Addis Ababa Science and Tech University</h3>
            <p><strong>Software Engineering Degree</strong></p>
            <p>
              My years in AASTU is one of the most profound years of my life. It was during my campus
              years I’ve built most of my projects and participated in clubs and events. I’ve made some
              incredible memories in there and learnt so much and the current version of me was very
              much shaped because of it.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2020 – 2024</div>
          <div className="timeline-content">
            <h3>Unity University</h3>
            <p><strong>Management Degree</strong></p>
            <p>
              While learning my software engineering degree in AASTU, I was learning Management in Unity
              as a distance student. It is a very interesting subject that has accounting, marketing,
              leadership and more.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2018 – 2019</div>
          <div className="timeline-content">
            <h3>Lebawi International Academy</h3>
            <p><strong>High School Diploma</strong></p>
            <p>
              These few years were some of my favorite years in school where I had to start as new and
              ready myself for what is coming.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2010 – 2018</div>
          <div className="timeline-content">
            <h3>Bahir Dar Academy</h3>
            <p><strong>Middle and High School</strong></p>
            <p>
              These were some of the years that shaped my teenage years and befriended some of my life
              long friends. It is also where I discovered programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
