import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.div 
        className="text-4xl font-bold text-purple-600 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>
      <p className="text-gray-700 mb-4">
        We are here to help you with your cleaning technology needs. Please fill out the form below, and our team will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            id="message" 
            required 
            rows={4} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
      <motion.div 
        className="mt-10 text-center" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-purple-600">Business Hours</h2>
        <p className="text-gray-700">Monday to Friday: 9 AM - 5 PM</p>
        <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </motion.div>
      <motion.div 
        className="mt-10 text-center" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-purple-600">Location</h2>
        <p className="text-gray-700">123 Clean St, Tech City, TX 12345</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;