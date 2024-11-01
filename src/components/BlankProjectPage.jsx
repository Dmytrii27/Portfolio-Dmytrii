// src/components/BlankProjectPage.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlankProjectPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Відновлення позиції скролу після повернення на головну
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, scrollPosition || 0);
    }, 0);
  };

  return (
    <div style={{ padding: '0px', textAlign: 'center', position: 'relative' }}>
      {/* Стрілка повернення на головну сторінку */}
      <button onClick={handleBackClick} style={{ position: 'absolute', top: '-20px', left: '0', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
        <div className="flex items-center text-stone-300 hover:text-stone-500 transition duration-200"
             style={{ transform: 'translateX(-150%)' }}>
          <span className="text-5xl">&#8592;</span> {/* Збільшення розміру стрілки */}
          <span className="ml-2 mt-1 text-xl"></span>
        </div>
      </button>

      {/* Контент сторінки */}
      <h1 className="text-4xl mt-12">This is a placeholder for Project 3</h1>
      <p className="mt-4 text-stone-400">Details for Project 3 will be added here soon.</p>
    </div>
  );
};

export default BlankProjectPage;
