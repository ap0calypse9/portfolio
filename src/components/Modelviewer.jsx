import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/model.glb"); // path relative to public/
  const modelRef = useRef();


  //lets rotate our bonsai

  useFrame(() => {
    if(modelRef.current) {
        modelRef.current.rotation.y += 0.003;
    }
  });
  
  return <primitive ref={modelRef} object={gltf.scene} position={[0, 1, 0]} scale={2.5} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: "500px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
