import React from "react";
import "../styles/Certificates.css";

// Import all your certificate images
import cert1 from "../assets/certificates/bewide_Tech.jpg";
import cert2 from "../assets/certificates/cursor-hackathon.png";
import cert3 from "../assets/certificates/GDG_Tech_Fest.png";
import cert4 from "../assets/certificates/codesoft.png";
import cert5 from "../assets/certificates/hackathon.png";
import cert6 from "../assets/certificates/Proffesional-foundations-alx.png";
import cert7 from "../assets/certificates/GDG-DSA.png";
import cert8 from "../assets/certificates/python-bootcamp.png";
import cert9 from "../assets/certificates/udacity-Data-analysis.png";
import cert10 from "../assets/certificates/mesirat.png";
import cert11 from "../assets/certificates/YALI-RLC-leadership.jpg";
import cert12 from "../assets/certificates/winner-Q&A.jpg";
import cert13 from "../assets/certificates/noble-character.jpg";

function Certificates() {
  const certificates = [
    { src: cert1, title: "bewide Tech" },
    { src: cert2, title: "cursor-hackathon" },
    { src: cert3, title: "GDG_Tech_Fest" },
    { src: cert4, title: "Web Development - CodSoft" },
    { src: cert5, title: "UNESCO Hackathon" },
    { src: cert6, title: "Professional Foundations - ALX" },
    { src: cert7, title: "DSA Track - GDG" },
    { src: cert8, title: "Python Bootcamp" },
    { src: cert9, title: "Data Analysis - Udacity" },
    { src: cert10, title: "Business & Finance - Mesirat" },
    { src: cert11, title: "Leadership - YALI" },
    { src: cert12, title: "Q&A Winner" },
    { src: cert13, title: "Noble Character Award" },
  ];

  const scrollLeft = () => {
    document.querySelector(".certificates-carousel").scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".certificates-carousel").scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-title">Certificates & Achievements</h2>
      <p className="certificates-subtitle">
        Recognitions and awards from global platforms, hackathons, and leadership programs.
      </p>

      <div className="certificates-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#8592;
        </button>

        <div className="certificates-carousel">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img src={cert.src} alt={cert.title} className="certificate-image" />
              <p className="certificate-title">{cert.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Certificates;
