"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and an engaging user experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🌐",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart, and secure checkout. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🛒",
    },
    {
      title: "Task Management App",
      description: "Intuitive task management application with drag-and-drop functionality, real-time updates, and collaborative features for team productivity.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      gradient: "from-orange-500 to-red-500",
      icon: "✅",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Clean UI with responsive design.",
      technologies: ["JavaScript", "API Integration", "CSS3"],
      gradient: "from-green-500 to-teal-500",
      icon: "🌤️",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on during my web development journey. 
            Each project represents a step forward in my learning and skill development.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${project.gradient} mb-4`}>
                    <span className="text-4xl">{project.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all`}>
                      View Project
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                      Code
                    </button>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`} />
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Visit My GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
