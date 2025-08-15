import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Smart Cleaning Solutions',
    description: 'Utilizing advanced algorithms to optimize your cleaning experience.',
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Committed to sustainability with our selection of green cleaning products.',
  },
  {
    title: '24/7 Support',
    description: 'Our team is available around the clock to assist you with your cleaning needs.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-purple-700 min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold">CleanSSR</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-purple-500">Features</a></li>
            <li><a href="#reviews" className="hover:text-purple-500">Reviews</a></li>
            <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold">Revolutionizing Cleaning with Technology</h2>
          <p className="mt-4 text-lg">Welcome to CleanSSR, where technology meets cleanliness.</p>
        </motion.div>
        <section id="features" className="w-full max-w-4xl mt-10">
          <h3 className="text-2xl font-semibold mb-6">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-purple-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ scale: 1 }} 
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="reviews" className="w-full max-w-4xl mt-10">
          <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
            <p className="italic">"CleanSSR transformed our workspace. Their technology-driven approach is a game-changer!"</p>
            <p className="mt-4 font-bold">- James T.</p>
          </div>
        </section>
      </main>
      <footer className="bg-purple-700 text-white p-6 text-center">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;