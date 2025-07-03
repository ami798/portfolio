import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">Feel free to reach out for opportunities, questions or collaborations!</p>

      <div className="contact-icons">
        <a href="amiraabdurahman8@gmail.com" target="_blank" rel="noopener noreferrer">
          📧 Email
        </a>
        <a href="https://github.com/ami798" target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/amira-abdurahman-282704298/" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="https://wa.me/251923471699" target="_blank" rel="noopener noreferrer">
          💬 WhatsApp
        </a>
        <a href="tel:+251923471699">
          ☎️ Phone
        </a>
      </div>
    </section>
  );
}

export default Contact;
