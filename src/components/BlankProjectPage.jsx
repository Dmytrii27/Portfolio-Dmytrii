import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FrameImage from '../assets/Group 427326644.png'; // Adjust the path to the image as needed

const BlankProjectPage = () => {
  const navigate = useNavigate();
  const [showGoUpButton, setShowGoUpButton] = useState(false);

  const handleBackClick = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, scrollPosition || 0);
    }, 0);
  };

  const handleGoUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextProject = () => {
    navigate("/next-project");
  };

  const handlePreviousProject = () => {
    navigate("/previous-project");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoUpButton(true);
      } else {
        setShowGoUpButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="project-detail bg-black text-white min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <div
        className="project-viewer"
        style={{ marginTop: '-20px' }} // Directly set top margin
      >
        <img
          src={FrameImage}
          alt="Project Detail"
          style={{
            width: '85%',       // Set width to 90% of the container
            maxWidth: '1500px', // Optional: Limit max width for larger screens
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 text-white text-2xl w-1/2">
        <button
          onClick={handlePreviousProject}
          className="text-white cursor-pointer bg-transparent border-none"
        >
          <span>&#8592; Previous Project</span>
        </button>
        <button
          onClick={handleNextProject}
          className="text-white cursor-pointer bg-transparent border-none"
        >
          <span>Next Project &#8594;</span>
        </button>
      </div>

      {/* Fixed Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-8 left-20 text-white text-5xl"
        style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        &#8592;
      </button>

      {/* Go Up Button */}
      {showGoUpButton && (
        <button
          onClick={handleGoUpClick}
          className="fixed bottom-10 right-20 text-white text-5xl rotate-90"
          style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          &#8592;
        </button>
      )}
    </motion.div>
  );
};

export default BlankProjectPage;












