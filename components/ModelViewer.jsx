// components/ModelViewer.js

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React from "react";

// Load the model (ensure to use the path where you store the model)
const Model = ({ modelPath }) => {
  const { scene } = useGLTF("/18.glb"); // Use the model path for your file
  return <primitive object={scene} />;
};

const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas>
      {/* Camera control */}
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, -110, -110]} intensity={1} />
      <directionalLight position={[14500, 5000, -10]} intensity={0.5} />

      <Model modelPath={modelPath} />
    </Canvas>
  );
};

export default ModelViewer;
