// src/components/BlankProjectPage2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlankProjectPage2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, scrollPosition || 0);
    }, 0);
  };

  return (
    <motion.div
      style={{ padding: '0px', textAlign: 'center', position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2, // Smooth and slower duration for appearance
        ease: "easeInOut"
      }}
    >
      {/* Back arrow to return to the main project page */}
      <button
        onClick={handleBackClick}
        style={{
          position: 'absolute',
          top: '-20px',
          left: '0',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <div
          className="flex items-center text-stone-300 hover:text-stone-500 transition duration-200"
          style={{ transform: 'translateX(-150%)' }}
        >
          <span className="text-5xl">&#8592;</span>
          <span className="ml-2 mt-1 text-xl"></span>
        </div>
      </button>

      {/* Page content */}
      <h1 className="text-4xl mt-12">This is a placeholder for Project 2</h1>
      <p className="mt-4 text-stone-400">Details for Project 2 will be added here soon.</p>
    </motion.div>
  );
};

export default BlankProjectPage2;
