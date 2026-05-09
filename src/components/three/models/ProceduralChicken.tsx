import * as THREE from "three";

export default function ProceduralChicken({ material }: { material: THREE.Material }) {
  const beakMaterial = new THREE.MeshStandardMaterial({ color: "#fca311", roughness: 0.4 });
  const eyeMaterial = new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.1 });
  const wattleMaterial = new THREE.MeshStandardMaterial({ color: "#d62828", roughness: 0.6 });

  return (
    <group>
      {/* Body */}
      <mesh castShadow receiveShadow material={material} position={[0, 0, 0]} scale={[1, 0.8, 1.2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
      </mesh>
      
      {/* Neck & Head */}
      <mesh castShadow receiveShadow material={material} position={[0, 0.6, 0.6]} scale={[1, 1.5, 1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
      </mesh>

      {/* Comb (Top Red Thing) */}
      <mesh castShadow receiveShadow material={wattleMaterial} position={[0, 1.2, 0.6]} scale={[0.2, 0.4, 0.6]}>
        <sphereGeometry args={[0.3, 16, 16]} />
      </mesh>

      {/* Wattle (Bottom Red Thing) */}
      <mesh castShadow receiveShadow material={wattleMaterial} position={[0, 0.6, 1.0]} scale={[0.2, 0.3, 0.2]}>
        <sphereGeometry args={[0.3, 16, 16]} />
      </mesh>

      {/* Beak */}
      <mesh castShadow receiveShadow material={beakMaterial} position={[0, 0.85, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.15, 0.4, 16]} />
      </mesh>

      {/* Eyes */}
      <mesh castShadow receiveShadow material={eyeMaterial} position={[0.2, 0.95, 0.85]}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>
      <mesh castShadow receiveShadow material={eyeMaterial} position={[-0.2, 0.95, 0.85]}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>

      {/* Wings */}
      <mesh castShadow receiveShadow material={material} position={[0.7, 0, 0]} rotation={[Math.PI / 4, 0, -Math.PI / 12]} scale={[0.2, 0.8, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
      <mesh castShadow receiveShadow material={material} position={[-0.7, 0, 0]} rotation={[Math.PI / 4, 0, Math.PI / 12]} scale={[0.2, 0.8, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>

      {/* Tail */}
      <mesh castShadow receiveShadow material={material} position={[0, 0.3, -0.8]} rotation={[-Math.PI / 4, 0, 0]} scale={[0.4, 0.8, 0.4]}>
        <coneGeometry args={[1, 2, 16]} />
      </mesh>
      
      {/* Legs */}
      <mesh castShadow receiveShadow material={beakMaterial} position={[0.3, -0.9, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.5]} />
      </mesh>
      <mesh castShadow receiveShadow material={beakMaterial} position={[-0.3, -0.9, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.5]} />
      </mesh>

      {/* Feet */}
      <mesh castShadow receiveShadow material={beakMaterial} position={[0.3, -1.15, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3]} />
      </mesh>
      <mesh castShadow receiveShadow material={beakMaterial} position={[-0.3, -1.15, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3]} />
      </mesh>
    </group>
  );
}
