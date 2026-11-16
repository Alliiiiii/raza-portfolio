"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Foundations of Cybersecurity", issuer: "Google", date: "Jan 2025", id: "UI0ZRDSVLSK1" },
  { name: "Play It Safe: Manage Security Risks", issuer: "Google", date: "Jan 2025", id: "SBUCE6762TA3" },
  { name: "Connect and Protect: Networks and Network Security", issuer: "Google", date: "Jan 2025", id: "X560B2F5K" },
  { name: "Tools of the Trade: Linux and SQL", issuer: "Google", date: "Feb 2025", id: "A6OLWMFRGM7J" },
  { name: "AI For Everyone", issuer: "DeepLearning.AI", date: "Dec 2024", id: "FRMSL2G15GAP" },
  { name: "People and Soft Skills for Professional and Personal Success", issuer: "IBM", date: "Feb 2025", id: "9VN10BGQEEI7" },
  { name: "Build a Free Website with WordPress", issuer: "Coursera Project Network", date: "Apr 2025", id: "KAHO4196LRW0" },
  { name: "Use WordPress to Create a Blog for Your Business", issuer: "Coursera Project Network", date: "Mar 2025", id: "K26V8GRUXSRB" },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">06. certifications</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Certifications</h2>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass rounded-xl p-5 transition hover:border-accent/40"
          >
            <Award className="mb-2 text-accent" size={20} />
            <h3 className="text-sm font-semibold text-white">{c.name}</h3>
            <p className="mt-1 text-xs text-accent2">{c.issuer}</p>
            <p className="mt-1 text-xs text-muted">{c.date} · {c.id}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
