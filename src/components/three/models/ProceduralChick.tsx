import * as THREE from "three";

export default function ProceduralChick({ material }: { material: THREE.Material }) {
  // Beak material
  const beakMaterial = new THREE.MeshStandardMaterial({ color: "#fca311", roughness: 0.4 });
  const eyeMaterial = new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.1 });

  return (
    <group>
      {/* Body */}
      <mesh castShadow receiveShadow material={material} position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      
      {/* Head */}
      <mesh castShadow receiveShadow material={material} position={[0, 0.4, 0.2]}>
        <sphereGeometry args={[0.35, 32, 32]} />
      </mesh>

      {/* Beak */}
      <mesh castShadow receiveShadow material={beakMaterial} position={[0, 0.4, 0.55]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.1, 0.2, 16]} />
      </mesh>

      {/* Eyes */}
      <mesh castShadow receiveShadow material={eyeMaterial} position={[0.15, 0.5, 0.45]}>
        <sphereGeometry args={[0.05, 16, 16]} />
      </mesh>
      <mesh castShadow receiveShadow material={eyeMaterial} position={[-0.15, 0.5, 0.45]}>
        <sphereGeometry args={[0.05, 16, 16]} />
      </mesh>

      {/* Wings */}
      <mesh castShadow receiveShadow material={material} position={[0.45, 0, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <capsuleGeometry args={[0.1, 0.3, 16, 16]} />
      </mesh>
      <mesh castShadow receiveShadow material={material} position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
        <capsuleGeometry args={[0.1, 0.3, 16, 16]} />
      </mesh>
      
      {/* Legs */}
      <mesh castShadow receiveShadow material={beakMaterial} position={[0.2, -0.6, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3]} />
      </mesh>
      <mesh castShadow receiveShadow material={beakMaterial} position={[-0.2, -0.6, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3]} />
      </mesh>
    </group>
  );
}
