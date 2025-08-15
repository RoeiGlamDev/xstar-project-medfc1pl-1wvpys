import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions for CleanSSR.
 * This hook initializes a 3D scene using three.js and manages
 * updates to the scene for interactive elements related to
 * CleanSSR's technology cleaning services.
 * 
 * @returns {object} An object containing the scene and animation functions.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    
    useEffect(() => {
        // Set up the scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 0); // Set clear color to white
        document.body.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5); // Soft white light
        scene.add(ambientLight);

        // Add a purple directional light
        const directionalLight = new THREE.DirectionalLight(0x800080, 1); // Purple light
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};