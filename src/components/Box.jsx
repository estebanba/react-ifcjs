import React from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Sphere from "./Sphere";

const Box = (props) => {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.005));

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        // scale={clicked ? 1.25 : 1}
        // onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        onContextMenu={(event) => console.log("context menu")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? "gray" : "lightgray"}
          opacity={hovered ? 0.1 : 1}
        />
        <Sphere position={[2, 2.5, 2]} />
      </mesh>
    </>
  );
};

export default Box;
