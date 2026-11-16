"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Database, Cloud, Terminal, GitBranch } from "lucide-react";

const groups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "C++", "Java", "JavaScript", "PHP", "HTML/CSS"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    items: ["Ethical Hacking", "Network Security", "Cryptography", "Digital Forensics", "System Hardening", "Nmap", "Wireshark"],
  },
  {
    title: "Data & DB",
    icon: Database,
    items: ["MySQL", "SQL", "Data Cleaning", "Pandas", "NumPy"],
  },
  {
    title: "Systems & Cloud",
    icon: Cloud,
    items: ["Linux Administration", "Cloud Computing", "SSH", "Firewalls", "Docker"],
  },
  {
    title: "Tools",
    icon: Terminal,
    items: ["Git & GitHub", "VS Code", "WordPress", "Bash"],
  },
  {
    title: "Practices",
    icon: GitBranch,
    items: ["Version Control", "REST APIs", "Auth & RBAC", "CI/CD basics"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">02. stack</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 transition hover:border-accent/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <g.icon className="text-accent" size={22} />
              <h3 className="font-semibold text-white">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted transition hover:border-accent/50 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
