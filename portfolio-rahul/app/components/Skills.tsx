"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Next.js", level: 65 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 65 },
        { name: "MongoDB", level: 55 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Responsive Design", level: 80 },
        { name: "Problem Solving", level: 90 },
      ],
    },
    {
      title: "Professional Skills",
      icon: "💼",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Team Management", level: 85 },
        { name: "Client Relations", level: 88 },
        { name: "Time Management", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Continuous Learner
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m constantly expanding my skill set and staying updated with the latest 
                technologies in web development. My diverse background helps me approach problems 
                from unique angles and find creative solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
