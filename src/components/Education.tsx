"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Programming Fundamentals", "Data Structures & Algorithms", "Web Development",
  "Database Management Systems", "Operating Systems", "Computer Networks",
  "Cybersecurity Principles", "Ethical Hacking", "Cryptography", "Digital Forensics",
  "Information Security Management", "Cloud Computing", "Linux System Administration",
];

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">05. education</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Education</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <GraduationCap className="text-accent" size={32} />
          <div>
            <h3 className="text-lg font-semibold text-white">BSc Information Technology</h3>
            <p className="text-sm text-accent2">University of Sindh, Jamshoro</p>
            <p className="mt-1 text-xs font-mono text-muted">Jan 2024 – Present</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <BookOpen size={16} className="text-accent" /> Relevant Coursework
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
