import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">Feel free to reach out for opportunities, questions, or collaborations!</p>

      <div className="contact-icons">
        <a href="mailto:amira.dev@example.com" target="_blank" rel="noopener noreferrer">
          📧 Email
        </a>
        <a href="https://github.com/amira-dev" target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
        <a href="https://linkedin.com/in/amira-dev" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="https://wa.me/2519XXXXXXXX" target="_blank" rel="noopener noreferrer">
          💬 WhatsApp
        </a>
        <a href="tel:+2519XXXXXXXX">
          ☎️ Phone
        </a>
      </div>
    </section>
  );
}

export default Contact;
