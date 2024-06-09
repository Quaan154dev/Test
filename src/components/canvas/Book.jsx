import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
const Book = ({ isMobile }) => {
  const book = useGLTF("book/scene.gltf");

  return (
    <mesh>
      {" "}
      <hemisphereLight intensity={1.5} groundColor="white" />
      <spotLight
      // position={[-20, 50, 10]}
      // angle={0.12}
      // penumbra={1}
      // intensity={2}
      // castShadow
      // shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      <primitive
        object={book.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0, -3, -2.2] : [0, -2.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const BookCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop="demand"
      // shadows
      // dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Book isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BookCanvas;
