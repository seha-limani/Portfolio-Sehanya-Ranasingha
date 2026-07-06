import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingTorus() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.25;
      ref.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Torus ref={ref} args={[1.1, 0.35, 16, 48]} position={[-2.2, 0.5, -1]}>
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.55}
        />
      </Torus>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere args={[0.75, 32, 32]} position={[2.4, -0.3, 0]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.25}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function FloatingIcosahedron() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.2;
      ref.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[0.55]} position={[0.5, 1.8, -2]}>
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.45}
        />
      </Icosahedron>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-10, -5, 5]} intensity={0.8} color="#7c3aed" />
      <FloatingTorus />
      <FloatingSphere />
      <FloatingIcosahedron />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 md:opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
