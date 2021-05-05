import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Sphere from 'components/Sphere';
import styles from 'styles/Scene.module.css';

const Scene = () => {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <Sphere />
        {/* 
        //@ts-expect-error */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
          <ambientLight intensity={1} />
        </PerspectiveCamera>
        {/* 
        //@ts-expect-error */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate />
      </Canvas>
    </div>
  );
};

export default Scene;
