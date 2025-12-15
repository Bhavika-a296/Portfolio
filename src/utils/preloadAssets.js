import { useGLTF } from "@react-three/drei";
import { getAssetPath } from "../utils/assetPath";

// Preload all 3D models on app initialization
export const preloadModels = () => {
  // Hero section models
  useGLTF.preload(getAssetPath("/models/optimized-room.glb"));
  
  // Contact section models
  useGLTF.preload(getAssetPath("/models/computer-optimized-transformed.glb"));
  
  // Tech stack models - only preload when user scrolls near
  const techModels = [
    "/models/react_logo-transformed.glb",
    "/models/android_logo.glb",
    "/models/node-transformed.glb",
    "/models/three.js-transformed.glb",
    "/models/git-svg-transformed.glb",
  ];
  
  // Lazy preload tech models
  setTimeout(() => {
    techModels.forEach(model => {
      useGLTF.preload(getAssetPath(model));
    });
  }, 2000); // Preload after 2 seconds
};
