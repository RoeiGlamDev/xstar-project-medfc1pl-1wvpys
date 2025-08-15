import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-purple-600 p-6">
      <motion.div 
        className="container mx-auto flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-purple-800 transition duration-200">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-800 transition duration-200">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-800 transition duration-200">Contact</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-purple-800 transition duration-200">Reviews</a>
            </li>
          </ul>
        </nav>
        <div className="mb-4">
          <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <motion.div 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {link.platform}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;