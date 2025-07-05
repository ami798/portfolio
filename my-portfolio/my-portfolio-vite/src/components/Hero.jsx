import React from "react";
import {
Send,
Linkedin,
Instagram,
Twitter,
Github,
Mail,
Phone,
} from "lucide-react";
import "./HeroSection.css"; // Optional: for extra styling if you want

function HeroSection() {
return (
<section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-gray-900" >
<div className="text-center max-w-3xl">
<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
Hello, I’m Amira 👋
</h1>
<p className="text-lg md:text-xl text-gray-700 mb-6">
A purpose-driven tech enthusiast passionate about building beautiful
digital experiences, designing solutions, and leading with impact.
</p>
</div>

php-template
Copy
Edit
  {/* Contact Icons */}
  <div className="flex flex-wrap justify-center gap-5 mt-4">
    <a
      href="mailto:your@email.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
    >
      <Send className="w-6 h-6 hover:text-violet-600 transition duration-200" />
    </a>
    <a
      href="https://linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-6 h-6 hover:text-blue-600 transition duration-200" />
    </a>
    <a
      href="https://instagram.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram className="w-6 h-6 hover:text-pink-500 transition duration-200" />
    </a>
    <a
      href="https://twitter.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <Twitter className="w-6 h-6 hover:text-sky-500 transition duration-200" />
    </a>
    <a
      href="https://github.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <Github className="w-6 h-6 hover:text-black transition duration-200" />
    </a>
    <a
      href="mailto:your@email.com"
      aria-label="Mail"
    >
      <Mail className="w-6 h-6 hover:text-rose-500 transition duration-200" />
    </a>
    <a
      href="tel:+251900000000"
      aria-label="Phone"
    >
      <Phone className="w-6 h-6 hover:text-green-600 transition duration-200" />
    </a>
  </div>
</section>
);
}

export default HeroSection;