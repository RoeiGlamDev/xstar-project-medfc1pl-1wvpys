import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Contact CleanSSR</h2>
        <p className="text-gray-700 mb-4 text-center">
          For all your technology cleaning inquiries, please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={border rounded-md p-2 w-full ${
                errors.name ? 'border-red-500' : 'border-purple-300'
              }}
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={border rounded-md p-2 w-full ${
                errors.email ? 'border-red-500' : 'border-purple-300'
              }}
              placeholder="Your Email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="reason" className="block text-gray-700">Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="border rounded-md p-2 w-full border-purple-300"
            >
              <option value="Inquiry">General Inquiry</option>
              <option value="Support">Support Request</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={border rounded-md p-2 w-full h-40 ${
                errors.message ? 'border-red-500' : 'border-purple-300'
              }}
              placeholder="Your Message"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-purple-600">Contact Information</h3>
          <p className="text-gray-700">Location: 123 Clean Street, Tech City, TX 12345</p>
          <p className="text-gray-700">Business Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;