import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Join the CleanSSR Community</h2>
      <p className="text-gray-700 text-center mb-6">
        Stay updated with the latest cleaning technology solutions and exclusive offers from CleanSSR. 
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full md:flex-row md:justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-purple-600 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0 md:mr-2 w-full md:w-64"
          required
        />
        <motion.div
          type="submit"
          className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </form>
      {submitted && (
        <motion.div
          className="mt-4 text-green-600"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to CleanSSR!
        </motion.p>
      )}
    </div>
  );
};

export default NewsletterSection;