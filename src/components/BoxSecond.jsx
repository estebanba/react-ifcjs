import React from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const BoxSecond = (props) => {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.005));

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.25 : 1}
      // onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 3, 1]} />
      <meshStandardMaterial
        color={hovered ? "lightgreen" : "gray"}
        opacity={hovered ? 0.1 : 1}
        wireframe
      />
    </mesh>
  );
};

export default BoxSecond;
