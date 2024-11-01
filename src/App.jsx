import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlankProjectPage from "./components/BlankProjectPage";
import BlankProjectPage1 from './components/BlankProjectPage1';
import BlankProjectPage2 from './components/BlankProjectPage2';
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute inset-x-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <Technologies />
                <Projects />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/project1" element={<BlankProjectPage1 />} />
            <Route path="/project2" element={<BlankProjectPage2 />} />
            <Route path="/project3" element={<BlankProjectPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
