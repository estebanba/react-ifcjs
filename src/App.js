import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import { ContactShadows, OrbitControls, Select } from "@react-three/drei";
import { Suspense, useState } from "react";
import BoxSecond from "./components/BoxSecond";
import Viewer from "./components/Viewer";
import Container from "./components/Container";

function App() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <OrbitControls
          makeDefault
          rotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.5}
          enablePan={false}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Select multiple box onChange={setSelected}>
            <group>
              <Box position={[0, 0.5, 0]} />
              <BoxSecond position={[0, 2.5, 0]} />
            </group>
            <Container>
              <Viewer />
            </Container>
            {/* <ModelATO /> */}
          </Select>
          <ContactShadows
            frames={1}
            position={[0, -0.1, 0]}
            scale={15}
            opacity={0.2}
            far={1}
            blur={2}
          />
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <gridHelper /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
