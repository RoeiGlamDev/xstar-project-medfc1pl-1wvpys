import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-purple-600">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
        <motion.div
          href={ctaLink}
          className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-sm text-gray-500">Trusted by industry leaders</p>
        <div className="flex space-x-4 mt-2">
          <span className="text-purple-600">⭐️ 5.0</span>
          <span className="text-purple-600">4,000+ Clients</span>
          <span className="text-purple-600">100% Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;