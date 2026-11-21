"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const AURORA = "#46d9b4";
const AMBER = "#f2b45c";
const CREAM = "#f8f2e6";
const CORAL = "#e2704a";
const LAGOON = "#1c7f80";

/** A thin orbit ring with a small planet travelling along it. */
function Orbit({
  radius,
  tilt,
  speed,
  color,
  planet,
  still,
}: {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  color: string;
  planet: number;
  still: boolean;
}) {
  const spin = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!still && spin.current) spin.current.rotation.z += dt * speed;
  });
  return (
    <group rotation={tilt}>
      <group ref={spin}>
        <mesh>
          <torusGeometry args={[radius, 0.011, 8, 180]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[planet, 28, 28]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

/** A stylised book: cover + visible page block. */
function Book({
  position,
  rotation,
  color,
  scale = 1,
  speed = 1,
  still,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  still: boolean;
}) {
  return (
    <Float
      speed={still ? 0 : speed}
      rotationIntensity={still ? 0 : 0.55}
      floatIntensity={still ? 0 : 1.3}
      floatingRange={[-0.18, 0.18]}
    >
      <group position={position} rotation={rotation} scale={scale}>
        <mesh>
          <boxGeometry args={[1.1, 0.2, 0.8]} />
          <meshStandardMaterial color={color} roughness={0.5} metalness={0.12} />
        </mesh>
        <mesh position={[0.05, 0, 0]}>
          <boxGeometry args={[1.08, 0.14, 0.76]} />
          <meshStandardMaterial color={CREAM} roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

function Core({ still }: { still: boolean }) {
  const solid = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (still) return;
    if (solid.current) {
      solid.current.rotation.y += dt * 0.28;
      solid.current.rotation.x += dt * 0.1;
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.12;
      shell.current.rotation.z += dt * 0.07;
    }
  });
  return (
    <group>
      <mesh ref={solid}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial color={AMBER} flatShading roughness={0.32} metalness={0.28} />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color={CREAM} wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

/** Handles responsive placement and gentle pointer parallax for the whole composition. */
function Rig({ children, still }: { children: React.ReactNode; still: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const size = useThree((s) => s.size);
  const mobile = size.width < 820;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g || still) return;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.current.x * 0.35, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.current.y * 0.18, 3, dt);
  });

  return (
    <group ref={group} position={mobile ? [0, 1.7, 0] : [2.7, 0.1, 0]} scale={mobile ? 0.58 : 1}>
      {children}
    </group>
  );
}

export default function SceneCanvas({ active, still }: { active: boolean; still: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9.5], fov: 38 }}
      frameloop={still ? "demand" : active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} color="#fff3dc" />
      <pointLight position={[-6, -2, 3]} intensity={55} color={AURORA} />
      <pointLight position={[3, -4, 2]} intensity={25} color={CORAL} />

      <Rig still={still}>
        <Core still={still} />
        <Orbit radius={2.3} tilt={[1.15, 0.2, 0]} speed={0.35} color={AURORA} planet={0.13} still={still} />
        <Orbit radius={3.1} tilt={[0.5, -0.6, 0.3]} speed={-0.22} color={AMBER} planet={0.1} still={still} />
        <Orbit radius={3.9} tilt={[1.6, 0.5, -0.4]} speed={0.14} color={CREAM} planet={0.08} still={still} />

        <Book position={[-2.9, 1.7, -0.5]} rotation={[0.4, 0.5, -0.3]} color={LAGOON} still={still} />
        <Book position={[2.6, 2.0, 0.6]} rotation={[-0.3, -0.6, 0.35]} color={CORAL} scale={0.8} speed={1.4} still={still} />
        <Book position={[3.1, -1.9, -0.8]} rotation={[0.5, 0.9, 0.2]} color={AURORA} scale={0.9} speed={0.9} still={still} />
        <Book position={[-2.4, -2.1, 0.8]} rotation={[-0.5, 0.2, 0.5]} color={AMBER} scale={0.7} speed={1.2} still={still} />
        <Book position={[0.2, 3.3, -1.5]} rotation={[0.2, -0.3, -0.6]} color={CREAM} scale={0.6} speed={1.6} still={still} />

        <Sparkles count={60} scale={[11, 8, 6]} size={2.4} speed={still ? 0 : 0.3} color={CREAM} opacity={0.7} />
      </Rig>
    </Canvas>
  );
}
