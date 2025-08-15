import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Basic cleaning services',
      'Weekly maintenance',
      '24/7 customer support',
    ],
  },
  {
    title: 'Standard Package',
    price: '$199/month',
    features: [
      'Advanced cleaning services',
      'Bi-weekly maintenance',
      'Priority customer support',
      'Monthly performance reports',
    ],
  },
  {
    title: 'Premium Package',
    price: '$299/month',
    features: [
      'Comprehensive cleaning services',
      'Weekly maintenance',
      'Dedicated account manager',
      'Customized cleaning plans',
      'Performance analytics',
    ],
  },
];

const FAQ = [
  {
    question: 'What services does CleanSSR offer?',
    answer: 'CleanSSR provides a range of cleaning services tailored for tech companies, including office cleaning, maintenance, and specialized equipment cleaning.',
  },
  {
    question: 'How do I schedule a cleaning?',
    answer: 'You can schedule a cleaning through our website or by contacting our customer support team.',
  },
  {
    question: 'Are your cleaning products eco-friendly?',
    answer: 'Yes, CleanSSR uses eco-friendly and tech-safe cleaning products to ensure the safety of your equipment and the environment.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-600 p-8">
      <motion.div className="text-4xl font-bold text-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        CleanSSR Pricing Plans
      </motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <motion.div key={index} className="bg-purple-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-semibold mb-4">{option.title}</h2>
            <p className="text-2xl mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-3xl font-bold text-center my-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Frequently Asked Questions
      </motion.h2>
      <motion.div className="bg-gray-100 rounded-lg p-6">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingPage;