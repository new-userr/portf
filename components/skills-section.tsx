"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Color Grading", level: 85 },
  { name: "Motion Graphics", level: 75 },
  { name: "Sound Design", level: 70 },
  { name: "Storytelling", level: 90 },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="section-padding bg-black/90">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            My Skills
          </motion.h2>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#4169E1]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              "Cinematic Editing",
              "Visual Effects",
              "Transitions",
              "Pacing",
              "Composition",
              "Narrative Structure",
              "Audio Mixing",
              "Color Theory",
            ].map((item, index) => (
              <div
                key={item}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#FFD700] transition-colors duration-300"
              >
                <p>{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
