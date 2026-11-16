"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Brain, Terminal } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Certifications", value: "8+" },
  { label: "Languages", value: "3" },
  { label: "Focus", value: "Sec+ML" },
];

const pillars = [
  { icon: Shield, title: "Cybersecurity", desc: "Network security, ethical hacking, digital forensics, system hardening." },
  { icon: Code2, title: "Python Dev", desc: "Clean, efficient code. CLI tools, data pipelines, automation." },
  { icon: Brain, title: "Machine Learning", desc: "Practical ML for threat detection and data intelligence." },
  { icon: Terminal, title: "Linux & Systems", desc: "Server hardening, SSH, firewalls, system administration." },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">01. about</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Who I Am</h2>
      </motion.div>
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted leading-relaxed"
        >
          <p>
            Motivated IT student at the University of Sindh with a strong foundation in programming and a growing passion for cybersecurity. Skilled in writing clean, efficient code and exploring advanced cyber defense techniques.
          </p>
          <p>
            Solid understanding of network security, ethical hacking, and digital forensics. Known for problem-solving, quick learning, and a proactive approach to staying updated with the latest trends in technology.
          </p>
          <p>
            Eager to contribute to innovative projects and pursue a career in cybersecurity to help protect digital assets and systems.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {pillars.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-5 transition hover:border-accent/40">
              <p.icon className="mb-3 text-accent" size={24} />
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
