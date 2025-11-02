"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Laboratory Manager & Owner",
      period: "5 Years",
      company: "Medical Laboratory",
      description: "Successfully managed and operated a medical laboratory, handling day-to-day operations, client relations, quality control, and team management.",
      skills: ["Leadership", "Operations Management", "Client Relations", "Quality Assurance", "Problem Solving"],
      icon: "🔬",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "BCA Student - Web Development",
      period: "Current",
      company: "Surat, Gujarat",
      description: "Pursuing Bachelor of Computer Applications with a focus on web development. Learning modern technologies and building real-world projects.",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: "💻",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 z-10" />

                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "" : "md:ml-8"}`}>
                    <motion.div
                      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 md:p-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Icon */}
                      <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${exp.color} mb-4`}>
                        <span className="text-4xl">{exp.icon}</span>
                      </div>

                      {/* Period badge */}
                      <div className="inline-block ml-4 px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {exp.period}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-2">
                        {exp.title}
                      </h3>
                      
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                        {exp.company}
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
