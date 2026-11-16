"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Shapes() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-2, -2, -2]} intensity={0.8} color="#a78bfa" />
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
        <Sphere args={[1.1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#22d3ee" distort={0.35} speed={2} roughness={0.2} metalness={0.6} />
        </Sphere>
      </Float>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.45, 32, 32]} position={[2.2, 1, -1]}>
          <meshStandardMaterial color="#a78bfa" roughness={0.3} metalness={0.7} />
        </Sphere>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
        <Sphere args={[0.3, 32, 32]} position={[-2, -1.2, 0.5]}>
          <meshStandardMaterial color="#f472b6" roughness={0.3} metalness={0.7} />
        </Sphere>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <Shapes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}
