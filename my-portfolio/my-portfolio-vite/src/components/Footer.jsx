import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Amira. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/ami798" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/amira-abdurahman-bb7552374" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="amiraabdurahman8@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
