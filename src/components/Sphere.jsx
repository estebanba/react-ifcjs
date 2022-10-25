import React from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = (props) => {
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
      <sphereGeometry args={[0.5, 32, 16]} />
      <meshStandardMaterial
        color={hovered ? "lightgreen" : "lightgray"}
        transparent
      />
    </mesh>
  );
};

export default Sphere;
