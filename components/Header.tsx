import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <motion.div
          className="text-purple-600 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo} alt="CleanSSR Logo" className="h-10 w-auto" />
          CleanSSR
        </motion.div>
        <nav className="hidden md:flex space-x-10">
          <motion.div
            href="#services"
            className="text-purple-600 hover:text-purple-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#reviews"
            className="text-purple-600 hover:text-purple-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Reviews
          </motion.a>
          <motion.div
            href="#about"
            className="text-purple-600 hover:text-purple-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.div
            href="#contact"
            className="text-purple-600 hover:text-purple-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-purple-600 focus:outline-none"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="flex flex-col bg-white shadow-lg md:hidden"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            href="#services"
            className="text-purple-600 hover:text-purple-800 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#reviews"
            className="text-purple-600 hover:text-purple-800 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Reviews
          </motion.a>
          <motion.div
            href="#about"
            className="text-purple-600 hover:text-purple-800 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.div
            href="#contact"
            className="text-purple-600 hover:text-purple-800 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;