"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Cybersecurity Threat Detection Tool",
    org: "Student Project",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Developed a Python-based tool to monitor network traffic and identify suspicious activity.",
      "Implemented basic anomaly detection using packet analysis and logging.",
      "Strengthened understanding of cybersecurity protocols and threat mitigation.",
    ],
  },
  {
    title: "Student Portal Web Application",
    org: "University Project",
    period: "Sep 2024 – Dec 2024",
    points: [
      "Designed and built a full-stack web app using HTML, CSS, JavaScript, and PHP.",
      "Integrated MySQL for student data management and course registration.",
      "Focused on user authentication and role-based access control.",
    ],
  },
  {
    title: "Linux Server Hardening",
    org: "Lab-Based Project",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Configured a Linux server: disabled unused services, set up firewalls.",
      "Implemented SSH key authentication and documented hardening procedures.",
      "Gained hands-on experience with system administration and security best practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">04. experience</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience</h2>
      </motion.div>
      <div className="relative border-l border-white/10 pl-6">
        {jobs.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-10 last:mb-0"
          >
            <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-white">{j.title}</h3>
                <span className="font-mono text-xs text-muted">{j.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent2">{j.org}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {j.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Briefcase size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
