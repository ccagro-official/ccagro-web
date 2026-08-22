"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import StoryController from "./StoryController";

interface PoultrySceneProps {
  progress: MotionValue<number>;
}

export default function PoultryScene({ progress }: PoultrySceneProps) {
  return (
    <Canvas
      shadows="percentage"
      camera={{ position: [0, 2, 8], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        castShadow 
        position={[5, 8, 5]} 
        intensity={1.5} 
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-5, 5, 5, -5]} />
      </directionalLight>
      
      {/* Environment for natural reflections */}
      <Environment preset="sunset" />
      <AdaptiveDpr pixelated />

      {/* Controller for Timeline & Models */}
      <StoryController progress={progress} />
      
      {/* Floor to catch shadows */}
      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </Canvas>
  );
}
