import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Advanced Cleaning Technology',
    description: 'Utilizing state-of-the-art cleaning technology, CleanSSR ensures a spotless environment through innovative solutions.',
    icon: <i className="fas fa-robot text-purple-600"></i>,
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Our cleaning products are eco-friendly, ensuring a safe environment for your family and the planet.',
    icon: <i className="fas fa-leaf text-purple-600"></i>,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'With our real-time monitoring system, you can track the cleaning process and ensure everything meets your standards.',
    icon: <i className="fas fa-chart-line text-purple-600"></i>,
  },
  {
    title: 'Customer-Centric Approach',
    description: 'At CleanSSR, customer satisfaction is our top priority. We tailor our services to meet your unique needs.',
    icon: <i className="fas fa-users text-purple-600"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">Our Technology Services at CleanSSR</h2>
        <p className="text-gray-700 mb-12">Explore the features that make CleanSSR the leader in cleaning technology solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;