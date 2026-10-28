"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
export const prog = { v: 0 }; // scroll progress 0..1, written by GSAP ScrollTrigger
function Core() {
  const g = useRef<THREE.Group>(null!), m = useRef<any>(null), ring = useRef<THREE.Mesh>(null!), shell = useRef<THREE.Mesh>(null!);
  const a = useMemo(() => new THREE.Color("#22e3ff"), []), b = useMemo(() => new THREE.Color("#8b6cff"), []);
  const rm = useMemo(() => matchMedia("(prefers-reduced-motion: reduce)").matches, []);
  useFrame((s, d) => {
    const p = prog.v, w = s.size.width > 760, G = g.current, L = THREE.MathUtils.lerp;
    if (!rm) G.rotation.y += d * 0.25;
    G.rotation.x = L(G.rotation.x, s.pointer.y * 0.5 + p * 2.5, 0.05);
    G.position.x = L(G.position.x, w ? 2.2 * (1 - Math.min(p * 3, 1)) : 0, 0.05);
    G.position.y = w ? 0 : 1.5;
    G.scale.setScalar((w ? 1 : 0.65) * (1 + p * 0.5));
    if (m.current) { m.current.distort = 0.55 - 0.4 * p; m.current.color.copy(a).lerp(b, p); }
    ring.current.rotation.x = 1.2 + p * 3;
    (ring.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + p * 0.6;
    shell.current.scale.setScalar(1 + p * 0.9);
    shell.current.rotation.y -= d * 0.1;
  });
  return (
    <group ref={g}>
      <mesh><icosahedronGeometry args={[1.2, 12]} /><MeshDistortMaterial ref={m} speed={2} metalness={0.8} roughness={0.2} /></mesh>
      <mesh ref={shell}><icosahedronGeometry args={[1.9, 1]} /><meshBasicMaterial color="#8b6cff" wireframe transparent opacity={0.35} /></mesh>
      <mesh ref={ring}><torusGeometry args={[2.7, 0.012, 8, 120]} /><meshBasicMaterial color="#aab4c8" transparent /></mesh>
      <Sparkles count={rm ? 20 : 80} scale={9} size={2} speed={rm ? 0 : 0.3} color="#9fefff" />
    </group>
  );
}
export default function Scene() {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => { try { const c = document.createElement("canvas"); setOk(!!(c.getContext("webgl2") || c.getContext("webgl"))); } catch { setOk(false); } }, []);
  if (ok === null) return null;
  if (!ok) return <div className="fallback fixed inset-0 z-0" aria-hidden />;
  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} /><pointLight position={[4, 3, 4]} intensity={40} color="#22e3ff" /><pointLight position={[-4, -2, 2]} intensity={25} color="#8b6cff" />
        <Core />
      </Canvas>
    </div>
  );
}
