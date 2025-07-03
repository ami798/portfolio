import React from "react";
import "../styles/Certificates.css";

// Import all certificate images
import cert1 from "../assets/certificates/codesoft.png";
import cert2 from "../assets/certificates/hackathon.png";
import cert3 from "../assets/certificates/Proffesional-foundations-alx.png";
import cert4 from "../assets/certificates/GDG-DSA.png";
import cert5 from "../assets/certificates/python-bootcamp.png";
import cert6 from "../assets/certificates/udacity-Data-analysis.png";
import cert7 from "../assets/certificates/mesirat.png";
import cert8 from "../assets/certificates/YALI-RLC-leadership.jpg";
import cert9 from "../assets/certificates/winner-Q&A.jpg";
import cert10 from "../assets/certificates/hackathon.png";
import cert11 from "../assets/certificates/hackathon.png";
import cert12 from "../assets/certificates/hackathon.png";
import cert13 from "../assets/certificates/hackathon.png";
import cert14 from "../assets/certificates/hackathon.png";
import cert15 from "../assets/certificates/hackathon.png";
import cert16 from "../assets/certificates/hackathon.png";
// Add all other certificates here

function Certificates() {
  // Array of all certificates (images)
  const certificates = [cert1, cert2, cert3 ,cert4 , cert5 , cert6 , cert7 , cert8 , cert9 , cert10 , cert11 , cert12 , cert13 , cert14 , cert15 , cert16 ];  // Add all your certificates to this array

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <img
            key={index}  // Important for rendering dynamically
            src={certificate}
            alt={`Certificate ${index + 1}`}
            className="certificate-image"
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
