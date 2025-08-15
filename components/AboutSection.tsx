import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', title: 'CEO & Co-Founder', expertise: 'AI & Machine Learning' },
  { name: 'Bob Smith', title: 'CTO', expertise: 'Cloud Computing & Cybersecurity' },
  { name: 'Carla Thompson', title: 'Head of Product', expertise: 'Software Development' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-600 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About CleanSSR
        </motion.h2>
        
        <motion.div
          className="text-lg text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          CleanSSR is at the forefront of technological innovation, providing advanced cleaning solutions tailored for modern enterprises. Our journey began with a vision to integrate cutting-edge technology into everyday cleaning practices, ensuring efficiency and sustainability.
        </motion.p>

        <motion.div
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At CleanSSR, our mission is to revolutionize the cleaning industry through innovative technological solutions. We strive to enhance operational efficiency, reduce environmental impact, and elevate the standards of cleanliness in every environment we serve.
        </motion.p>

        <motion.div
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Meet Our Team
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-4 rounded-lg shadow-lg text-purple-600 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md">{member.title}</p>
              <p className="text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-md">At CleanSSR, we value innovation, integrity, and excellence. Our commitment to using the latest technology ensures that we deliver the highest standards of service to our clients.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;