import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const particles: THREE.Points[] = [];
        const particleCount = 500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  100;
            positions[i  3 + 1] = (Math.random() - 0.5)  100;
            positions[i  3 + 2] = (Math.random() - 0.5)  100;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({ color: 0x8A2BE2, size: 0.1 });
        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);
        particles.push(pointCloud);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            pointCloud.rotation.x += 0.001;
            pointCloud.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0"></div>;
};

const ParticleContainer: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            <ParticleBackground />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div
                    className="text-6xl font-bold text-purple-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to CleanSSR
                </motion.h1>
                <motion.div
                    className="mt-4 text-lg text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Your trusted technology partner for innovative cleaning solutions.
                </motion.p>
                <motion.div
                    className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Get Started
                </motion.button>
                <div className="mt-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-purple-600">What We Offer</h2>
                    <p className="mt-2 text-lg text-gray-700">
                        At CleanSSR, we specialize in leveraging technology to provide
                        the most effective cleaning solutions tailored to your needs.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-purple-600">Client Reviews</h2>
                    <ul className="mt-4 space-y-4">
                        <li className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-300">
                            <p className="text-gray-700">
                                "CleanSSR has transformed our approach to cleanliness and productivity!"
                            </p>
                            <span className="block text-purple-600 mt-2">- Alex P.</span>
                        </li>
                        <li className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-300">
                            <p className="text-gray-700">
                                "The technology implemented by CleanSSR is top-notch!"
                            </p>
                            <span className="block text-purple-600 mt-2">- Jamie L.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ParticleContainer;