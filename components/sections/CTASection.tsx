import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Cleaning Experience with CleanSSR", 
  subtitle = "Seamless, efficient, and technologically advanced cleaning solutions tailored for your needs.", 
  buttonText = "Get Started" ,
  onButtonClick
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-white">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-purple-600">{title}</h2>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
      </motion.div>
      <motion.div 
        className="mt-6 px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        onClick={onButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default CTASection;