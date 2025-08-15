import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    photo: '/images/alice.jpg',
    review: 'CleanSSR transformed our operations with their innovative cleaning tech solutions. Our productivity has soared!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Smith',
    photo: '/images/michael.jpg',
    review: 'The eco-friendly products used by CleanSSR are not only effective but also safe for our team. Highly recommend!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Samantha Lee',
    photo: '/images/samantha.jpg',
    review: 'With CleanSSR, we’ve experienced a cleaner and healthier workspace. Their technology is a game changer!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-purple-600 text-3xl font-bold mb-6">What Our Clients Say About CleanSSR</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map(({ id, name, photo, review, rating }) => (
            <motion.div
              key={id}
              className="bg-purple-100 rounded-lg shadow-md p-6 m-4 w-full md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={photo} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-purple-600 font-semibold text-lg">{name}</h3>
              <p className="text-gray-700 italic mb-2">Rating: {'⭐'.repeat(rating)}</p>
              <p className="text-gray-600">{review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;