"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"
            variants={itemVariants}
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
              variants={itemVariants}
            >
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Rahul Vishwakarma</span>, 
                a 22-year-old BCA student based in Surat with a unique and diverse background. 
                My journey into technology is anything but conventional.
              </motion.p>

              <motion.div
                className="space-y-6"
                variants={itemVariants}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Educational Background
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I completed my 10th and 12th with Commerce stream, followed by a Diploma in 
                      Medical Laboratory Technology (DMLT). This foundation in healthcare gave me 
                      analytical thinking and attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Professional Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      For 5 years, I successfully ran and managed a medical laboratory. This experience 
                      taught me leadership, problem-solving, client management, and the importance of 
                      precision - skills that translate perfectly into software development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      The Tech Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Now, I&apos;m channeling my full potential into BCA and web development. 
                      I&apos;m passionate about creating beautiful, functional websites and applications. 
                      My diverse background gives me a unique perspective in approaching problems and 
                      building solutions that truly matter.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  What Drives Me
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My transition from healthcare to technology represents my belief in continuous learning 
                  and adaptation. I bring the same dedication and precision from my laboratory management 
                  days into every line of code I write. I&apos;m excited about building web solutions that 
                  make a difference and constantly expanding my skills in this ever-evolving field.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
