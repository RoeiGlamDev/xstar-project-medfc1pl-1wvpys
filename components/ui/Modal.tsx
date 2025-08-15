import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-purple-600 text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white rounded py-2 px-4 hover:bg-purple-700 transition duration-200"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;