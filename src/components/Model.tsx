"use client";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

function BagModel(props) {
  const { scene } = useGLTF("/foodpanda_bag.glb");
  return <primitive object={scene} {...props}></primitive>;
}
const Model = () => {
  return (
    <div className="relative">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        className="absolute w-full h-full"
      >
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"dawn"} />
          <BagModel scale={2} />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Model;
