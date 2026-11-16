"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm font-semibold text-accent">
          raza.ali<span className="text-accent2">()</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/Alliiiiii" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition hover:text-white">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/raza-ali-a33135266" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition hover:text-white">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:razaalilashari12@gmail.com" aria-label="Email" className="text-muted transition hover:text-white">
            <Mail size={18} />
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-surface/90 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block text-sm text-muted transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
