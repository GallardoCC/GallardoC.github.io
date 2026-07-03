"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Cristal cromado facetado: la pieza central del hero.
 * - Rota lentamente solo.
 * - Sigue al mouse con parallax + tilt suave (lerp, sin brusquedad).
 * - Reacciona al scroll: rota y se aleja mientras el hero sale de pantalla.
 */
function ChromeCrystal() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const reduced = prefersReducedMotion();

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current || !mesh.current) return;

    // Rotación propia constante
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.rotation.x = Math.sin(clock.elapsedTime * 0.25) * 0.12;

    if (reduced) return;

    // Parallax + tilt hacia el cursor (interpolado)
    const targetX = pointer.x * 0.45;
    const targetY = pointer.y * 0.3;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.06);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.06);

    // Storytelling con scroll: gira y retrocede al salir del hero
    const progress = Math.min(window.scrollY / window.innerHeight, 1);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -progress * 2.2, 0.08);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, progress * 0.8, 0.08);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.9}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#e4e4e7"
            metalness={0.92}
            roughness={0.18}
            flatShading
            envMapIntensity={1.4}
          />
        </mesh>
        {/* Anillo orbital fino: aporta profundidad sin costo */}
        <mesh rotation={[Math.PI / 2.6, 0.4, 0]}>
          <torusGeometry args={[2.15, 0.012, 8, 96]} />
          <meshStandardMaterial color="#71717a" metalness={1} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

/** Estudio de luz sintético: franjas frías azul/violeta que el cromo refleja. */
function StudioLights() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={2.2} position={[0, 4, -4]} scale={[10, 1, 1]} color="#ffffff" />
      <Lightformer intensity={1.6} position={[-5, 1, 2]} scale={[6, 1.5, 1]} color="#1d4ed8" />
      <Lightformer intensity={1.2} position={[5, -1, 2]} scale={[6, 1.5, 1]} color="#6d28d9" />
      <Lightformer intensity={1.4} position={[0, -4, 0]} scale={[8, 1, 1]} color="#a1a1aa" />
    </Environment>
  );
}

export default function HeroScene() {
  return (
    // El wrapper propio garantiza position:absolute — el div interno de R3F
    // trae position:relative inline y no puede sobreescribirse con clases.
    <div className="hero-3d__canvas" aria-hidden="true">
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      {/* El objeto vive centro-derecha; en móvil el layout lo centra */}
      <group position={[1.4, 0, 0]}>
        <ChromeCrystal />
        <Sparkles count={70} scale={7} size={1.6} speed={0.25} opacity={0.35} color="#c8c8cd" />
      </group>
      <StudioLights />
      {/* Luces directas: garantizan visibilidad aunque el env-map aún no esté listo */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} color="#ffffff" />
      <pointLight position={[-6, -2, 3]} intensity={14} color="#1d4ed8" />
      <pointLight position={[6, 2, -3]} intensity={12} color="#6d28d9" />
    </Canvas>
    </div>
  );
}
