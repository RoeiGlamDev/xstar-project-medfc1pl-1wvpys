import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  label: string;
  value: number;
}

const statsData: Stats[] = [
  { label: 'Projects Completed', value: 250 },
  { label: 'Happy Clients', value: 180 },
  { label: 'Years of Experience', value: 5 },
  { label: 'Awards Won', value: 10 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">CleanSSR Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-purple-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="text-2xl font-semibold text-purple-600">
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;