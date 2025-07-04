import React from "react";
import "./EducationSection.css";

function EducationSection() {
return (
<div className="education-section" id="education">
<h2 className="section-title">Education</h2>
<div className="education-cards">
<div className="edu-card fade-in">
<div className="edu-header">
<h3>Addis Ababa Science and Tech University</h3>
<span className="edu-date">2024 – 2028</span>
</div>
<p className="edu-degree">Software Engineering</p>
<p className="edu-desc">
I'm currently a second-year Software Engineering student focused on building a strong foundation in full-stack web development. I’m actively learning modern technologies and best practices while working on real-world projects to sharpen my problem-solving and coding skills. Passionate about clean code, responsive design, and continuous improvement, I'm committed to growing as a developer and contributing to meaningful tech solutions.
</p>
</div>


    <div className="edu-card fade-in">
      <div className="edu-header">
        <h3>MS-League</h3>
        <span className="edu-date">2024 – 2027</span>
      </div>
      <p className="edu-degree">Leadership</p>
      <p className="edu-desc">
        I’m currently studying Leadership at MS-League, where I’m developing skills in strategic thinking, organizational management, and communication to strengthen my future leadership capabilities in tech environments.
      </p>
    </div>

    <div className="edu-card fade-in">
      <div className="edu-header">
        <h3>Nejashi Academy</h3>
        <span className="edu-date">2016 – 2023</span>
      </div>
      <p className="edu-degree">High School Diploma</p>
      <p className="edu-desc">
        Completed my secondary education with distinction. Built a disciplined academic foundation, developed time management skills, and fostered a curiosity for technology and innovation that drives my current learning journey.
      </p>
    </div>
  </div>
</div>
);
}

export default EducationSection;

