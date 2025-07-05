import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Code2, Monitor } from "lucide-react";

const experiences = [
  {
    title: "Community Volunteer Projects",
    org: "Nejashi Academy",
    date: "2018 – 2023",
    icon: <Users className="text-purple-500 w-6 h-6" />,
    description:
      "Founded and actively led several volunteer initiatives in high school including blood donation, school cleanups, financial aid drives, tutoring, and community development projects."
  },

  {
    title: "Student Ambassador",
    org: "YALI RLC Ethiopia",
    date: "2021 – 2022",
    icon: <Briefcase className="text-green-500 w-6 h-6" />,
    description:
      "Completed an intensive 1-year leadership and mentorship training, representing YALI’s American Chapter in Ethiopia and engaging in community-focused youth development."
  },

  {
    title: "Remote Learner",
    org: "A2SV Community",
    date: "Dec 2024 – Present",
    icon: <Code2 className="text-blue-500 w-6 h-6" />,
    description:
      "Hands-on learning in data structures, algorithms, and LeetCode practice with real-time peer collaboration."
  },

  {
    title: "Technical Core + DSA Mentor",
    org: "Nejm Student Developers Association",
    date: "2025 – Present",
    icon: <Monitor className="text-yellow-500 w-6 h-6" />,
    description:
      "Mentored peers in DSA, managed technical sessions, built time management and team leadership skills."
  },

  {
    title: "Frontend Developer (Core Team)",
    org: "Proghubs - AASTU",
    date: "2024 – Present",
    icon: <Code2 className="text-pink-500 w-6 h-6" />,
    description:
      "Collaborated on projects aligned with company needs and developed websites for volunteer work."
  },

  {
    title: "Web Development Intern",
    org: "CODSOFT",
    date: "2025",
    icon: <Monitor className="text-orange-500 w-6 h-6" />,
    description:
      "Completed 1-month remote internship focused on practical web development skills."
  },

  {
    title: "Summer Intern (Web + Systems)",
    org: "GIV-Ethiopia NGO",
    date: "Jun 2025 – Present",
    icon: <Briefcase className="text-cyan-500 w-6 h-6" />,
    description:
      "Participated in digitizing systems and building organizational websites with a developer team."
  },

  {
    title: "Daewa Department Head",
    org: "MS-League",
    date: "2024 – Present",
    icon: <Users className="text-lime-500 w-6 h-6" />,
    description:
      "Organized spiritual events, book reviews,Podcast hosting and long-term intensive youth training programs."
  },

  {
title: "Hackathon & Product Building",
org: "SheCodes-AASTU",
date: "2025",
icon: <Code2 className="text-violet-500 w-6 h-6" />,
description:
"Completed a 4-month intensive Python training as part of the SheCodes-AASTU program, followed by a competitive hackathon. Collaborated with a team to build AllyNet - a digital platform that empowers and connects women through shared learning, community support and inclusive tech solutions. The project earned strong recognition for innovation and impact. Gained hands-on experience in full-cycle product development including UI/UX, backend integration and community focused design."
},

  {
    title: "Freelancer (UI/UX, Web Dev, Design)",
    org: "Upwork & AfriWork",
    date: "2025 – Present",
    icon: <Code2 className="text-violet-500 w-6 h-6" />,
    description:
      "Worked as a freelancer providing services in UI/UX design, web development, video editing and more."
  }

];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] max-w-xs bg-gray-50 rounded-2xl shadow-lg p-5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg text-gray-900">
                {exp.title}
              </h3>
              {exp.icon}
            </div>
            <p className="text-sm text-gray-500 mb-1 font-medium">{exp.org}</p>
            <p className="text-xs text-gray-400 mb-3">{exp.date}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
