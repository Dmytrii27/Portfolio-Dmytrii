// src/components/BlankProjectPage1.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlankProjectPage1 = () => {
  const location = useLocation();

  // Save the scroll position in session storage when the component mounts
  useEffect(() => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  }, []);

  return (
    <div style={{ padding: '0px', textAlign: 'center', position: 'relative' }}>
      {/* Back arrow to return to the main project page */}
      <Link to="/" style={{ position: 'absolute', top: '-20px', left: '5px', textDecoration: 'none' }}>
        <div
          className="flex items-center text-stone-300 hover:text-stone-500 transition duration-200"
          style={{ transform: 'translateX(-150%)' }}
        >
          <span className="text-5xl">&#8592;</span>
          <span className="ml-2 mt-1 text-xl">Back</span>
        </div>
      </Link>

      {/* Page content */}
      <h1 className="text-4xl mt-12">This is a placeholder for Project 1</h1>
      <p className="mt-4 text-stone-400">Details for Project 1 will be added here soon.</p>
    </div>
  );
};

export default BlankProjectPage1;
