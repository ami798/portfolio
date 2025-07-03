import React from "react";
import "../styles/Certificates.css";

// Import all certificate images
import cert1 from "../assets/certificates/certificate1.jpg";
import cert2 from "../assets/certificates/certificate2.jpg";
import cert3 from "../assets/certificates/certificate3.jpg";
// Add all other certificates here

function Certificates() {
  // Array of all certificates (images)
  const certificates = [cert1, cert2, cert3];  // Add all your certificates to this array

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
