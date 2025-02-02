import "../assets/css/model3D.css";
import { Canvas } from "@react-three/fiber";

function Model3D() {
  return (
    <div className="model3D">
      {/* <img src="/src/assets/savanna.jpg" alt="Savanne" /> */}
      <Canvas>
        <ambientLight />
        <mesh>
          <boxBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Model3D;
