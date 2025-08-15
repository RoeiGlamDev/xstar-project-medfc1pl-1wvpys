import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Tech Support',
    price: '$49/month',
    features: [
      '24/7 Email Support',
      'Basic Software Updates',
      'Remote Troubleshooting',
    ],
  },
  {
    name: 'Pro Tech Solutions',
    price: '$99/month',
    features: [
      'Priority Email Support',
      'Advanced Software Updates',
      'Monthly System Health Checks',
    ],
  },
  {
    name: 'Premium IT Management',
    price: '$149/month',
    features: [
      'Dedicated Account Manager',
      'Comprehensive System Audits',
      'Custom IT Solutions',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-purple-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CleanSSR Pricing Plans
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Choose the plan that suits your technology needs best.
        </p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                {tier.name}
              </h3>
              <p className="text-xl font-bold text-purple-800 mb-4">
                {tier.price}
              </p>
              <ul className="text-left text-gray-700 mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;