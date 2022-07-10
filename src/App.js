import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import Model from "./Model";

export default function Viewer() {
  const ref = useRef();
  return (
    <>
      <div style={{position: 'absolute', width: '100%', textAlign: 'center', zIndex: '101'}}>Hello</div>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault fov={50} position={[5, 0.5, 10]} />
        <Suspense fallback={null}>
          <Stage controls={ref} intensity={1}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          maxDistance={28}
          minDistance={10}
          minPolarAngle={1.35}
          maxPolarAngle={2}
          enablePan={true}
          ref={ref}
        />
      </Canvas>
    </>
  );
}
