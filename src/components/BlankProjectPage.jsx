import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FrameImage from '../assets/Frame 427326610.png'; // Adjust the path to the image as needed
import ProjectOverviewImage from '../assets/Project overview 2.png'; // Path to the second image
import DesignProcessImage from '../assets/Design process and timeline 3.png'; // Path to the new image

const BlankProjectPage = () => {
  const navigate = useNavigate();
  const [showGoUpButton, setShowGoUpButton] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false); // State for second image animation
  const [showThirdImage, setShowThirdImage] = useState(false); // State for third image animation

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

      // Show the second image based on scroll position
      if (window.scrollY > 0) {
        setShowSecondImage(true);
      } else {
        setShowSecondImage(false);
      }

      // Show the third image only after scrolling past the second image
      if (window.scrollY > 900) { // Adjust this value to control when the third image appears (after the second image)
        setShowThirdImage(true);
      } else {
        setShowThirdImage(false);
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
      <div className="project-viewer" style={{ marginTop: '-20px' }}>
        <img
          src={FrameImage}
          alt="Project Detail"
          style={{
            width: '85%',
            maxWidth: '1500px',
            display: 'block',
            margin: '0 auto',
          }}
        />

        {/* First image with animation */}
        <motion.img
          src={ProjectOverviewImage}
          alt="Project Overview"
          initial={{ opacity: 0, x: -150 }} // Move it further off-screen to the left
          animate={showSecondImage ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} // Animate to visible
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.2, 0.9] }} // Increased duration for a slower effect
          style={{
            width: '85%',
            maxWidth: '1500px',
            display: 'block',
            margin: '0 auto',
            marginTop: '0',
          }}
        />

        {/* Second image with animation from the right */}
        <motion.img
          src={DesignProcessImage}
          alt="Design Process"
          initial={{ opacity: 0, x: 150 }} // Move it off-screen to the right
          animate={showThirdImage ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }} // Animate to visible
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.2, 0.9] }} // Same animation settings
          style={{
            width: '85%',
            maxWidth: '1500px',
            display: 'block',
            margin: '0 auto',
            marginTop: '0',
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






















