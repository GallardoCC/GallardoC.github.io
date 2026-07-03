"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Busto humano estilizado (cabeza + cuello + hombros) construido solo con
 * primitivas: cromo oscuro facetado + malla wireframe plateada superpuesta.
 * Sin modelos externos → cero peso extra de descarga.
 * - Oscila suavemente (no gira en círculos: evita el efecto "muñeco").
 * - Sigue al cursor con lerp sutil.
 * - Mismo estudio de luz azul/violeta que el hero para coherencia de marca.
 */
function ChromeBust() {
  const group = useRef<THREE.Group>(null);
  const reduced = prefersReducedMotion();

  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    // Oscilación lenta de "presencia" + seguimiento del cursor
    const idleY = Math.sin(clock.elapsedTime * 0.35) * 0.22;
    const targetY = reduced ? idleY : idleY + pointer.x * 0.4;
    const targetX = reduced ? 0 : -pointer.y * 0.18;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
  });

  return (
    <group ref={group} position={[0, -0.12, 0]}>
      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.35}>
        {/* Cabeza: cromo oscuro facetado */}
        <mesh position={[0, 0.62, 0]}>
          <icosahedronGeometry args={[0.5, 2]} />
          <meshStandardMaterial
            color="#18181c"
            metalness={1}
            roughness={0.22}
            flatShading
            envMapIntensity={1.7}
          />
        </mesh>
        {/* Cabeza: cáscara wireframe plateada */}
        <mesh position={[0, 0.62, 0]} scale={1.06}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshBasicMaterial color="#c8c8cd" wireframe transparent opacity={0.24} />
        </mesh>
        {/* Cuello */}
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.15, 0.21, 0.36, 24]} />
          <meshStandardMaterial color="#131316" metalness={1} roughness={0.3} envMapIntensity={1.3} />
        </mesh>
        {/* Hombros: media esfera achatada */}
        <mesh position={[0, -0.44, 0]} scale={[1.18, 0.66, 0.56]}>
          <sphereGeometry args={[0.9, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#0e0e11" metalness={0.95} roughness={0.28} envMapIntensity={1.5} />
        </mesh>
        {/* Hombros: wireframe exterior */}
        <mesh position={[0, -0.45, 0]} scale={[1.23, 0.69, 0.6]}>
          <sphereGeometry args={[0.9, 18, 9, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshBasicMaterial color="#71717a" wireframe transparent opacity={0.18} />
        </mesh>
        {/* Anillo orbital fino alrededor de la cabeza */}
        <mesh position={[0, 0.62, 0]} rotation={[Math.PI / 2.35, 0.45, 0]}>
          <torusGeometry args={[0.82, 0.007, 8, 80]} />
          <meshStandardMaterial color="#a1a1aa" metalness={1} roughness={0.25} />
        </mesh>
        {/* Pedestal: disco cromado */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1.12, 1.12, 0.015, 64]} />
          <meshStandardMaterial color="#3f3f46" metalness={1} roughness={0.35} />
        </mesh>
      </Float>
      <Sparkles count={36} scale={2.6} size={1.3} speed={0.2} opacity={0.3} color="#c8c8cd" />
    </group>
  );
}

/** Mismo lenguaje de luz que el hero: franjas frías azul/violeta sobre cromo. */
function StudioLights() {
  return (
    <Environment resolution={128}>
      <Lightformer intensity={2} position={[0, 4, -4]} scale={[10, 1, 1]} color="#ffffff" />
      <Lightformer intensity={1.5} position={[-5, 1, 2]} scale={[6, 1.5, 1]} color="#1d4ed8" />
      <Lightformer intensity={1.1} position={[5, -1, 2]} scale={[6, 1.5, 1]} color="#6d28d9" />
      <Lightformer intensity={1.2} position={[0, -4, 0]} scale={[8, 1, 1]} color="#a1a1aa" />
    </Environment>
  );
}

export default function PersonaScene() {
  return (
    // Wrapper absoluto propio: el div interno de R3F trae position:relative inline
    <div className="persona-figure__canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.15, 3.1], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ChromeBust />
        <StudioLights />
        <ambientLight intensity={0.22} />
        <directionalLight position={[3, 5, 4]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -1, 3]} intensity={10} color="#1d4ed8" />
        <pointLight position={[5, 2, -2]} intensity={9} color="#6d28d9" />
      </Canvas>
    </div>
  );
}
