import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage }) => {const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && !e.target.value) {
      setError(validationMessage || 'This field is required');} else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-purple-600 font-semibold mb-1">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={p-2 border rounded-lg focus:outline-none transition ${
          error ? 'border-red-500' : 'border-gray-300'
        } hover:border-purple-500}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        style={{ backgroundColor: ''white'', color: ''black' '}}
        required={required}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;