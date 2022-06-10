import { Physics, PlaneProps, usePlane, useSphere } from "@react-three/cannon";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { ReactElement } from "react";
import * as THREE from "three";

function Borders(): ReactElement {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, 4]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane(props: PlaneProps): null {
  usePlane(() => ({ ...props }));
  return null;
}

function Mouse(): null {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [4] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}

function InstancedBalls({ count = 50 }): ReactElement {
  const { viewport } = useThree();
  const [ref] = useSphere<
    THREE.InstancedMesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
  >(() => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0],
    args: [1],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[undefined, undefined, count]}
    >
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshLambertMaterial color="#ff7b00" emissive={"red"} />
    </instancedMesh>
  );
}

export default function Balls(): ReactElement {
  return (
    <Canvas
      shadows
      dpr={1.5}
      gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <ambientLight intensity={0.75} />
      <fog attach="fog" args={["red", 25, 35]} />

      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={4} />
      <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
      <Physics
        gravity={[0, -50, 0]}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <group position={[0, 0, -10]}>
          <Mouse />
          <Borders />
          <InstancedBalls />
        </group>
      </Physics>
      <EffectComposer multisampling={0}>
        <SSAO
          samples={11}
          radius={1}
          intensity={50}
          luminanceInfluence={0.6}
          color="red"
        />
      </EffectComposer>
    </Canvas>
  );
}
