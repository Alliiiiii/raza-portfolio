"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export function Preloader() {
  const [s, setS] = useState(true);
  useEffect(() => { const t = setTimeout(() => setS(false), 900); return () => clearTimeout(t); }, []);
  return <AnimatePresence>{s && <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[100] grid place-items-center bg-obsidian"><motion.span initial={{ opacity: 0, letterSpacing: ".6em" }} animate={{ opacity: 1, letterSpacing: ".3em" }} className="font-mono text-sm text-cyan2">RAZA ALI</motion.span></motion.div>}</AnimatePresence>;
}
export function Cursor() {
  const r = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    setOn(true);
    const mv = (e: PointerEvent) => {
      if (!r.current) return;
      r.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      r.current.dataset.h = String(!!(e.target as HTMLElement).closest?.("a,button,input,textarea"));
    };
    addEventListener("pointermove", mv);
    return () => removeEventListener("pointermove", mv);
  }, []);
  return on ? <div ref={r} className="cur" aria-hidden /> : null;
}
export type Cmd = { label: string; run: () => void };
export function Palette({ cmds }: { cmds: Cmd[] }) {
  const [o, setO] = useState(false), [q, setQ] = useState("");
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setO(v => !v); } if (e.key === "Escape") setO(false); };
    const op = () => setO(true);
    addEventListener("keydown", k); addEventListener("open-palette", op);
    return () => { removeEventListener("keydown", k); removeEventListener("open-palette", op); };
  }, []);
  const list = cmds.filter(c => c.label.toLowerCase().includes(q.toLowerCase()));
  const go = (c: Cmd) => { setO(false); setQ(""); c.run(); };
  return (
    <AnimatePresence>{o && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-start bg-black/60 px-4 pt-[18vh] backdrop-blur-sm" onClick={() => setO(false)}>
        <motion.div initial={{ y: 12, scale: 0.98 }} animate={{ y: 0, scale: 1 }} role="dialog" aria-label="Command palette" className="card mx-auto w-full max-w-lg" onClick={e => e.stopPropagation()}>
          <input autoFocus value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === "Enter" && list[0] && go(list[0])} placeholder="Type a command…" aria-label="Search commands" className="w-full rounded-xl border border-white/10 bg-obsidian/70 px-4 py-3" />
          <ul className="mt-3 max-h-72 overflow-auto">{list.map(c => <li key={c.label}><button className="w-full rounded-lg px-3 py-2 text-left text-silver hover:bg-white/5 hover:text-cyan2" onClick={() => go(c)}>{c.label}</button></li>)}{!list.length && <li className="px-3 py-2 text-silver">No match</li>}</ul>
        </motion.div>
      </motion.div>)}</AnimatePresence>
  );
}
