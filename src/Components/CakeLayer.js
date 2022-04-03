import React, { useState } from "react";

export default function CakeLayer(props) {

    return (
        <mesh position={[props.position.x, props.position.y, props.position.z]} >
            <cylinderBufferGeometry attach="geometry" args={props.geomateryArgs} />
            <meshNormalMaterial attach="material" />
        </mesh>
    );
}