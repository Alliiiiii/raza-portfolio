"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const msg = fd.get("message");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:razaalilashari12@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-accent">07. contact</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-muted leading-relaxed">
            Have an opportunity, a question, or just want to say hi? My inbox is always open.
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:razaalilashari12@gmail.com" className="glass flex items-center gap-3 rounded-xl p-4 transition hover:border-accent/40">
              <Mail className="text-accent" size={20} />
              <span className="text-sm text-white">razaalilashari12@gmail.com</span>
            </a>
            <a href="https://github.com/Alliiiiii" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition hover:border-accent/40">
              <GithubIcon className="text-accent" size={20} />
              <span className="text-sm text-white">github.com/Alliiiiii</span>
            </a>
            <a href="https://www.linkedin.com/in/raza-ali-a33135266" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition hover:border-accent/40">
              <LinkedinIcon className="text-accent" size={20} />
              <span className="text-sm text-white">linkedin.com/in/raza-ali-a33135266</span>
            </a>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none" />
          <input name="email" type="email" required placeholder="Your email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none" />
          <textarea name="message" required rows={4} placeholder="Message" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-accent/30">
            Send <Send size={16} />
          </button>
          {status && <p className="text-xs text-muted">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
