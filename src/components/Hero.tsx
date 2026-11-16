"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false, loading: () => null });

const roles = ["Cybersecurity Analyst", "Python Developer", "ML Builder", "Ethical Hacker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1200);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent2/20 blur-3xl animate-float" />
      <div className="absolute right-0 top-20 h-[420px] w-[420px] opacity-70">
        <Scene3D />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          &gt; hello, world. I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
        >
          Raza <span className="glow-text">Ali</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 flex items-center gap-2 text-xl text-muted sm:text-2xl"
        >
          <span className="text-white">I&apos;m a</span>
          <span className="font-mono text-accent">{text}</span>
          <span className="h-6 w-0.5 animate-pulse bg-accent" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted"
        >
          Cybersecurity & ML enthusiast, Python developer. I build tools that detect threats, clean data, and make the web safer. Currently studying IT at University of Sindh.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-accent/30">
            View Projects <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
          <a href="mailto:razaalilashari12@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
            <Download size={16} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
