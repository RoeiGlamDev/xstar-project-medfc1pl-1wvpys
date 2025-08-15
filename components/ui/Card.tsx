import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  review: string;
}

const Card: React.FC<CardProps> = ({ title, content, review }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-purple-600 text-xl font-semibold">{title}</h3>
      <p className="text-white mt-2">{content}</p>
      <blockquote className="mt-4 border-l-4 border-purple-600 pl-4 italic text-gray-300">
        {review}
      </blockquote>
    </motion.div>
  );
};

export default Card;