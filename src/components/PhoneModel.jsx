import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PhoneModel() {
  const { scene } = useGLTF("/models/smartphone.glb");

  const phoneRef = useRef();

  useFrame(() => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group
      ref={phoneRef}
      position={[-0.4, -11, 0]}
      scale={[4.5, 4.5, 4.5]}
    >
      <primitive object={scene} />
    </group>
  );
}