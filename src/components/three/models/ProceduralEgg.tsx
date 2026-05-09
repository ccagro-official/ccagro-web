import * as THREE from "three";

export default function ProceduralEgg({ material }: { material: THREE.Material }) {
  return (
    <mesh castShadow receiveShadow material={material} scale={[1, 1.3, 1]}>
      <sphereGeometry args={[0.8, 32, 32]} />
    </mesh>
  );
}
