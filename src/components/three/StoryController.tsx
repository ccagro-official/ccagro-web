"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import * as THREE from "three";
import ProceduralEgg from "./models/ProceduralEgg";
import ProceduralChick from "./models/ProceduralChick";
import ProceduralChicken from "./models/ProceduralChicken";

function ProceduralFeed({ visible }: { visible: boolean }) {
  const group = useRef<THREE.Group>(null);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: "#8b5a2b", roughness: 1 }), []);
  
  useFrame((state) => {
    if (group.current) {
      group.current.visible = visible;
      // Optional: Add simple idle rotation or scattered placement
    }
  });

  return (
    <group ref={group} position={[0, -0.6, 0.4]}>
      <mesh material={material} position={[-0.2, 0, 0]} scale={0.05}><boxGeometry/></mesh>
      <mesh material={material} position={[0.1, 0, 0.1]} scale={0.06}><boxGeometry/></mesh>
      <mesh material={material} position={[0, 0, -0.1]} scale={0.04}><boxGeometry/></mesh>
      <mesh material={material} position={[-0.1, 0, 0.2]} scale={0.05}><boxGeometry/></mesh>
      <mesh material={material} position={[0.2, 0, -0.05]} scale={0.05}><boxGeometry/></mesh>
    </group>
  );
}

interface StoryControllerProps {
  progress: MotionValue<number>;
}

export default function StoryController({ progress }: StoryControllerProps) {
  const eggGroup = useRef<THREE.Group>(null);
  const chickGroup = useRef<THREE.Group>(null);
  const chickenGroup = useRef<THREE.Group>(null);
  const [showFeed, setShowFeed] = useState(false);
  
  // Custom materials that can fade in/out
  const materials = useMemo(() => ({
    egg: new THREE.MeshStandardMaterial({ color: "#f5e6d3", roughness: 0.4 }),
    chickBody: new THREE.MeshStandardMaterial({ color: "#ffdb58", roughness: 0.8 }),
    chickenBody: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.9 })
  }), []);

  useFrame((state) => {
    const p = progress.get();
    
    // Smooth idle bobbing
    const time = state.clock.getElapsedTime();
    const idleY = Math.sin(time * 2) * 0.05;

    // Timeline Logic
    // 0.0 - 0.30: Egg
    // 0.30 - 0.60: Chick
    // 0.60 - 1.00: Chicken

    if (eggGroup.current) {
      eggGroup.current.position.y = idleY;
      // Fade out egg after 0.35
      const eggScale = p < 0.35 ? 1 : Math.max(0, 1 - (p - 0.35) * 10);
      eggGroup.current.scale.setScalar(eggScale);
      eggGroup.current.visible = eggScale > 0.01;
      
      // Cracking effect (rotation and slight split if we had separate meshes)
      if (p > 0.15 && p <= 0.35) {
        eggGroup.current.rotation.z = Math.sin(time * 20) * 0.1 * ((p - 0.15) * 5);
      } else {
        eggGroup.current.rotation.z = 0;
      }
    }

    if (chickGroup.current) {
      // Chick emerges at 0.3, grows until 0.6
      const chickScale = p < 0.25 ? 0 : p < 0.6 ? Math.min(1, (p - 0.25) * 3) : Math.max(0, 1 - (p - 0.6) * 10);
      chickGroup.current.scale.setScalar(chickScale);
      chickGroup.current.visible = chickScale > 0.01;
      
      // Walking / Pecking animation
      if (p > 0.4 && p < 0.6) {
        chickGroup.current.position.y = idleY + Math.abs(Math.sin(time * 8)) * 0.1;
        chickGroup.current.rotation.x = Math.sin(time * 8) * 0.2; // Pecking
        if (!showFeed) setShowFeed(true);
      } else {
        chickGroup.current.position.y = idleY;
        chickGroup.current.rotation.x = 0;
        if (showFeed) setShowFeed(false);
      }
    }

    if (chickenGroup.current) {
      // Chicken appears at 0.6
      const chickenScale = p < 0.55 ? 0 : Math.min(1.5, (p - 0.55) * 3);
      chickenGroup.current.scale.setScalar(chickenScale);
      chickenGroup.current.visible = chickenScale > 0.01;
      chickenGroup.current.position.y = idleY;
      
      // Proud stance rotation
      if (p > 0.8) {
        chickenGroup.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <group ref={eggGroup}>
        <ProceduralEgg material={materials.egg} />
      </group>
      <group ref={chickGroup} position={[0, -0.2, 0]}>
        <ProceduralChick material={materials.chickBody} />
      </group>
      <ProceduralFeed visible={showFeed} />
      <group ref={chickenGroup} position={[0, 0, 0]}>
        <ProceduralChicken material={materials.chickenBody} />
      </group>
    </group>
  );
}
