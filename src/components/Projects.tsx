"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Database, Terminal, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  icon: typeof Shield;
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "PhishLens",
    desc: "Explainable phishing URL detection — ML + heuristics, offline, CLI-first. Pure NumPy inference, sub-ms scoring, human-readable reasons.",
    tags: ["Python", "NumPy", "ML", "CLI"],
    icon: Shield,
    github: "https://github.com/Alliiiiii/phishlens",
    featured: true,
  },
  {
    title: "Student Portal Web App",
    desc: "Full-stack university portal with MySQL, student data management, course registration, auth and role-based access control.",
    tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    icon: Database,
    github: "https://github.com/Alliiiiii",
  },
  {
    title: "Cybersecurity Threat Detection Tool",
    desc: "Python tool monitoring network traffic, packet sniffing and anomaly detection to log suspicious activity.",
    tags: ["Python", "Networking", "Anomaly Detection"],
    icon: Terminal,
    github: "https://github.com/Alliiiiii",
  },
  {
    title: "Linux Server Hardening",
    desc: "Hardened Linux server: disabled unused services, firewalls, SSH key auth, documented procedures.",
    tags: ["Linux", "Security", "Bash"],
    icon: Terminal,
    github: "https://github.com/Alliiiiii",
  },
  {
    title: "Python Data Cleaner",
    desc: "Utility for cleaning and normalizing messy datasets — missing values, dedup, type coercion.",
    tags: ["Python", "Pandas", "Data"],
    icon: Sparkles,
    github: "https://github.com/Alliiiiii",
  },
  {
    title: "SentinelLog AI",
    desc: "Lightweight SIEM dashboard: log ingestion, attack visualization, AI threat summaries. FastAPI + Next.js + Docker.",
    tags: ["FastAPI", "Next.js", "Docker", "AI"],
    icon: Shield,
    github: "https://github.com/Alliiiiii/sentinellog-ai",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">03. projects</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Featured Work</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/50 ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p.icon className="text-accent" size={26} />
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-muted transition hover:text-white">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-muted transition hover:text-white">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-mono text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
