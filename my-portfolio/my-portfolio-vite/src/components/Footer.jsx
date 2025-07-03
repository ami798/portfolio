import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Amira. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/amira-dev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/amira-dev" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:amira.dev@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
