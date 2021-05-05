import { MeshProps, useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';
import { Suspense, useRef, useState } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';

const AnimatedDistortedMaterial = animated(MeshDistortMaterial);

const Sphere = () => {
  const sphereMesh = useRef<MeshProps>(null);
  const materialRef = useRef<JSX.IntrinsicElements['wobbleMaterialImpl']>(null);

  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const [{ scale, color }] = useSpring(
    {
      scale: active ? 3 : 1.5,
      color: hover ? 'pink' : active ? 'red' : 'white',
      config: config.wobbly
    },
    [active, hover]
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.factor = Math.abs(Math.sin(clock.getElapsedTime())) * 2;
      materialRef.current.speed = Math.abs(Math.sin(clock.getElapsedTime())) * 10;
    }
  });

  return (
    <>
      <Suspense fallback={null}>
        <animated.mesh
          scale={scale}
          onClick={() => setActive(!active)}
          ref={sphereMesh}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          {/* 
        //@ts-expect-error */}
          <AnimatedDistortedMaterial
            attach='material'
            factor={0.6}
            ref={materialRef}
            color={color}
            metalness={0.1}
            envMapIntensity={1}
            clearcoatRoughness={0}
            clearcoat={1}
          />
        </animated.mesh>
      </Suspense>
    </>
  );
};

export default Sphere;
