import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
    title: string;
    description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
    return (
        <div className="h-screen bg-white flex flex-col items-center justify-center">
            <motion.div 
                className="text-5xl font-bold text-purple-600 mb-5"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h1>
            <motion.div 
                className="text-xl text-gray-700 mb-10 text-center max-w-lg"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.7 }}
            >
                {description}
            </motion.p>
            <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <OrbitControls />
                {/ 3D models and elements go here /}
            </Canvas>
            <div className="mt-10 text-center">
                <motion.div 
                    className="bg-purple-600 text-white py-2 px-4 rounded transition-all hover:bg-purple-700 focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>
        </div>
    );
};

export default Scene;