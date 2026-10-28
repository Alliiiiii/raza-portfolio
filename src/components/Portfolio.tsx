"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { P } from "@/data/portfolio";
import { prog } from "./Scene";
import { Cmd, Cursor, Palette, Preloader } from "./UI";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
const NAV = [["home", "Home"], ["about", "About"], ["skills", "Expertise"], ["work", "Projects"], ["journey", "Journey"], ["contact", "Contact"]];
const rmq = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: rmq() ? "auto" : "smooth" });

export default function Portfolio() {
  const [active, setActive] = useState("home"), [f, setF] = useState("all"), [open, setOpen] = useState<string | null>(null);
  const [copied, setCopied] = useState(false), [pct, setPct] = useState(0);
  const [msg, setMsg] = useState({ n: "", m: "" });
  const copy = async () => { try { await navigator.clipboard.writeText(P.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { window.prompt("Copy email:", P.email); } };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({ start: 0, end: "max", onUpdate: s => { prog.v = s.progress; setPct(s.progress); } });
    if (!rmq()) gsap.utils.toArray<HTMLElement>(".rv").forEach(el => gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, scrollTrigger: { trigger: el, start: "top 90%" } }));
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    NAV.forEach(([id]) => { const n = document.getElementById(id); n && io.observe(n); });
    return () => { io.disconnect(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  const cmds: Cmd[] = [
    ...NAV.map(([id, l]) => ({ label: `Go to ${l}`, run: () => goTo(id) })),
    { label: "Open GitHub", run: () => window.open(P.github, "_blank", "noopener") },
    ...(P.linkedin ? [{ label: "Open LinkedIn", run: () => window.open(P.linkedin, "_blank", "noopener") }] : []),
    { label: "Copy email", run: copy },
    { label: "Download resume", run: () => { const a = document.createElement("a"); a.href = P.resume; a.download = ""; a.click(); } },
  ];
  const projs = P.projects.filter(p => f === "all" || p.cat === f);
  return (
    <>
      <Preloader /><Cursor /><Palette cmds={cmds} /><Scene />
      <div className="fixed left-0 top-0 z-40 h-0.5 bg-gradient-to-r from-cyan2 to-violet2" style={{ width: `${pct * 100}%` }} />
      <nav aria-label="Primary" className="fixed left-1/2 top-3 z-50 flex max-w-[calc(100%-16px)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-navy/60 p-1.5 backdrop-blur-xl">
        {NAV.map(([id, l]) => <a key={id} href={`#${id}`} aria-current={active === id} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition ${active === id ? "bg-cyan2/15 text-cyan2" : "text-silver hover:text-white"}`}>{l}</a>)}
        <button onClick={() => dispatchEvent(new Event("open-palette"))} aria-label="Open command palette (Ctrl+K)" className="rounded-full px-3 py-1.5 font-mono text-xs text-silver hover:text-cyan2">Ctrl K</button>
        <a href={P.resume} download className="rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Resume</a>
      </nav>
      <main className="relative z-10">
        <section id="home" className="sec items-start">
          <p className="eyebrow">{P.role}</p>
          <h1 className="my-3 bg-gradient-to-r from-white via-cyan2 to-violet2 bg-clip-text text-[clamp(48px,11vw,120px)] font-bold leading-[.98] tracking-tight text-transparent">{P.name}</h1>
          <p className="max-w-xl text-xl text-white">{P.headline}</p>
          <p className="mt-3 max-w-xl text-silver">{P.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href="#work" className="btn btn-p">Explore My Work</a><a href="#contact" className="btn">Contact Me</a></div>
        </section>
        <section id="about" className="sec">
          <p className="eyebrow rv">01 — About</p><h2 className="rv mb-5 text-4xl font-bold">Curious by default. Defensive by design.</h2>
          {P.about.map(t => <p key={t} className="rv mb-4 max-w-2xl text-lg text-silver">{t}</p>)}
        </section>
        <section id="skills" className="sec">
          <p className="eyebrow rv">02 — Expertise</p><h2 className="rv mb-6 text-4xl font-bold">What I work with</h2>
          <div className="grid gap-4 sm:grid-cols-2">{Object.entries(P.skills).map(([k, v]) => <div key={k} className="card rv"><h3 className="text-lg font-semibold">{k}</h3><div className="mt-3 flex flex-wrap gap-2">{v.map(s => <span key={s} className="chip">{s}</span>)}</div></div>)}</div>
        </section>
        <section id="work" className="sec">
          <p className="eyebrow rv">03 — Projects</p><h2 className="rv mb-5 text-4xl font-bold">Selected work</h2>
          <div className="mb-5 flex gap-2" role="group" aria-label="Filter projects">{["all", "security", "web"].map(c => <button key={c} aria-pressed={f === c} onClick={() => setF(c)} className={`rounded-full border px-4 py-1.5 text-sm capitalize ${f === c ? "border-cyan2 text-cyan2" : "border-white/10 text-silver"}`}>{c}</button>)}</div>
          <div className="grid gap-4 md:grid-cols-3">{projs.map(p => (
            <article key={p.title} className="card transition hover:-translate-y-1.5 hover:border-cyan2/50">
              <div className="mb-4 h-24 rounded-xl border border-white/10" style={{ background: "radial-gradient(circle at 30% 30%,rgba(34,227,255,.35),transparent 55%),radial-gradient(circle at 75% 70%,rgba(139,108,255,.35),transparent 55%),#0b1226" }} />
              <h3 className="font-semibold">{p.title}</h3><p className="text-sm text-silver">{p.dates}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
              {open === p.title && <ul className="mt-3 list-disc pl-5 text-sm text-silver">{p.points.map(x => <li key={x}>{x}</li>)}</ul>}
              <div className="mt-4 flex gap-3 text-sm"><button aria-expanded={open === p.title} onClick={() => setOpen(open === p.title ? null : p.title)} className="text-cyan2 underline-offset-4 hover:underline">{open === p.title ? "Less" : "Details"}</button><a href={p.repo || P.github} target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white">GitHub ↗</a></div>
            </article>))}</div>
        </section>
        <section id="journey" className="sec">
          <p className="eyebrow rv">04 — Journey</p><h2 className="rv mb-6 text-4xl font-bold">Education &amp; certifications</h2>
          <div className="ml-1.5 border-l border-white/10 pl-6">
            <div className="rv relative mb-6"><span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-cyan2 shadow-[0_0_14px_#22e3ff]" /><h3 className="font-semibold">{P.education.degree}</h3><p className="text-silver">{P.education.school} · {P.education.dates}</p></div>
            <div className="rv relative"><span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-violet2 shadow-[0_0_14px_#8b6cff]" /><h3 className="font-semibold">Certifications</h3><ul className="mt-2 space-y-1 text-sm text-silver">{P.certs.map(c => <li key={c}>{c}</li>)}</ul></div>
          </div>
        </section>
        <section id="contact" className="sec">
          <p className="eyebrow rv">05 — Contact</p><h2 className="rv mb-3 text-4xl font-bold">Let’s build something secure.</h2>
          <p className="rv text-silver">Open to internships, collaborations and conversations about cybersecurity.</p>
          <a className="rv mt-4 break-all text-2xl text-white hover:text-cyan2" href={`mailto:${P.email}`}>{P.email}</a>
          <div className="mt-4 flex flex-wrap gap-3"><button onClick={copy} className="btn btn-p">{copied ? "Copied ✓" : "Copy email"}</button><a className="btn" href={P.resume} download>Download resume</a><a className="btn" href={P.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>{P.linkedin && <a className="btn" href={P.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}</div>
          <form className="mt-8 grid max-w-xl gap-3" onSubmit={e => { e.preventDefault(); location.href = `mailto:${P.email}?subject=${encodeURIComponent("Portfolio message from " + msg.n)}&body=${encodeURIComponent(msg.m)}`; }}>
            <input required value={msg.n} onChange={e => setMsg({ ...msg, n: e.target.value })} placeholder="Your name" aria-label="Your name" className="rounded-xl border border-white/10 bg-navy/70 px-4 py-3" />
            <textarea required rows={4} value={msg.m} onChange={e => setMsg({ ...msg, m: e.target.value })} placeholder="Your message" aria-label="Your message" className="rounded-xl border border-white/10 bg-navy/70 px-4 py-3" />
            <button className="btn" type="submit">Open in my email app</button>
            <p className="text-xs text-silver">No server involved: this opens your email app with the message pre-filled. Nothing is sent until you press send there.</p>
          </form>
        </section>
      </main>
      <footer className="relative z-10 px-6 pb-14 pt-8 text-center text-sm text-silver">© 2026 {P.name} · {P.location}</footer>
    </>
  );
}
