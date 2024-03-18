
import  { useState } from 'react';
import { motion } from 'framer-motion';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-8 h-8 focus:outline-none"
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: isOpen ? 0 : 1, rotate: 0 }}
          animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M6 18L18 6M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: isOpen ? 1 : 0, rotate: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
