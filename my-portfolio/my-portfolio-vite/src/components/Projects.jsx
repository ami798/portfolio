import React from "react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Chocolate-Bliss",
    description:
      "A modern, responsive web application for a cake cafe featuring a beautiful UI, interactive search functionality and smooth animations. Built with vanilla JavaScript and Tailwind CSS.",
    github: "https://github.com/ami798/Chocolate-Bliss",
    img: "/project2.png",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce app with authentication and product management.",
    link: "https://your-ecommerce-link.com",
    github: "https://github.com/yourusername/ecommerce-app",
    img: "/project2.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-based blog website built with Next.js and TailwindCSS.",
    link: "https://your-blog-link.com",
    github: "https://github.com/yourusername/blog-platform",
    img: "/project3.jpg",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot using OpenAI API with a beautiful React frontend.",
    link: "https://your-chatbot-link.com",
    github: "https://github.com/yourusername/ai-chatbot",
    img: "/project4.jpg",
  },
];

const otherProjects = [
  {
    title: "Weather App (CLI)",
    description:
      "Node.js CLI tool that shows weather info from OpenWeatherMap API.",
    github: "https://github.com/yourusername/weather-cli",
  },
  {
    title: "To-Do API",
    description:
      "A RESTful API for a task manager app using Express and MongoDB.",
    github: "https://github.com/yourusername/todo-api",
  },
  {
    title: "Typing Speed Game",
    description:
      "A fun typing speed test game made using vanilla JavaScript.",
    github: "https://github.com/yourusername/typing-game",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white text-gray-900 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-xl shadow-lg text-center p-6"
          >
            <img
              src={project.img}
              alt={project.title}
              className="mx-auto mb-4 h-20 w-20 object-cover rounded-md shadow-sm"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex justify-center gap-4 text-indigo-600 text-sm font-medium">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Live →
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Other Projects
        </h3>
        <ul className="space-y-6">
          {otherProjects.map((proj, idx) => (
            <li
              key={idx}
              className="bg-gray-100 hover:bg-gray-200 p-6 rounded-xl shadow-sm transition"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h4 className="text-lg font-semibold">{proj.title}</h4>
                  <p className="text-gray-700 text-sm">{proj.description}</p>
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-0 text-indigo-600 font-medium hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
