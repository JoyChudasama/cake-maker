import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import CakeLayer from "./CakeLayer";
import styledComponents from "styled-components";
import { PerspectiveCamera } from "three";

export default function Cake() {

    return (
        <CanvasWrapper>
            <Canvas className="canvas">
                <OrbitControls minDistance={6} enableZoom={false} enablePan={false} autoRotate={true} maxPolarAngle={1} minPolarAngle={1} />
                <CakeLayer geomateryArgs={[3, 3, 1, 64, 64]} position={{ x: 0, y: 0, z: 0 }} />
                <CakeLayer geomateryArgs={[2.5, 2.5, 0.8, 64, 64]} position={{ x: 0, y: 0.9, z: 0 }} />
                <CakeLayer geomateryArgs={[2, 2, 0.6, 64, 64]} position={{ x: 0, y: 1.6, z: 0 }} />
            </Canvas>
        </CanvasWrapper>
    );
}


const CanvasWrapper = styledComponents.div`
    position: relative;
    background: #1f1144;

    canvas {
        height:100vh;
    }
`;
