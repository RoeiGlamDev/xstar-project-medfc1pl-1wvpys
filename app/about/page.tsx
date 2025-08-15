import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',
    description: 'With over a decade of experience in technology and cleaning solutions, Alice leads CleanSSR with a vision for innovation and excellence.',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    image: '/images/bob.jpg',
    description: 'An expert in software development and clean technology, Bob drives our technological advancements to ensure top-notch service delivery.',
  },
  {
    name: 'Charlie Brown',
    role: 'Operations Manager',
    image: '/images/charlie.jpg',
    description: 'Charlie ensures that our operations run smoothly and efficiently, maintaining our commitment to quality and customer satisfaction.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-800">
      <header className="text-center py-10">
        <motion.div
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About CleanSSR
        </motion.h1>
        <motion.div
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At CleanSSR, we are revolutionizing the cleaning industry through technology.
        </motion.p>
      </header>

      <section className="px-5 py-10">
        <motion.div
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="mt-4 text-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Founded in 2020, CleanSSR emerged from a desire to harness technology to provide superior cleaning services. Our journey has been marked by continuous innovation and a commitment to sustainability.
        </motion.p>
      </section>

      <section className="bg-purple-100 py-10">
        <motion.div
          className="text-3xl font-semibold text-center text-purple-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Values
        </motion.h2>
        <ul className="mt-4 max-w-3xl mx-auto text-lg list-disc list-inside">
          <li>Innovation: We leverage technology to enhance our cleaning services.</li>
          <li>Sustainability: We are committed to eco-friendly practices.</li>
          <li>Customer Satisfaction: Our clients' happiness drives our success.</li>
        </ul>
      </section>

      <section className="py-10">
        <motion.div
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-purple-600">{member.role}</p>
              <p className="mt-2 text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;