import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/1.png";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center relative group"
          >
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false); // Локальний стан для кожного зображення

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/4 relative overflow-hidden"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block group-hover:cursor-pointer"
          onMouseEnter={() => setIsHovered(true)} // Локальний стан для наведення
          onMouseLeave={() => setIsHovered(false)} // Локальний стан для виходу
        >
          <img
            src={project.image}
            width={250}
            height={250}
            alt={project.title}
            className="rounded object-cover w-full h-full" // Без рамок
          />
          <ImageOverlay isHovered={isHovered} />
        </a>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:w-3/4 lg:pl-8"
      >
        <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
        <p className="mb-4 text-stone-400">{project.description}</p>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </>
  );
};

const ImageOverlay = ({ isHovered }) => {
  return (
    <motion.div
      initial={{ y: 0 }} // Початково перекриває зображення
      animate={{ y: isHovered ? "100%" : "0%" }} // Плавно відкривається і закривається
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center"
    >
      {/* Логотип посередині полотна */}
      <img
        src={logo} // Вказує на відносний шлях з поточної директорії
        alt="Logo"
        className="h-70 w-60 object-contain"
      />
    </motion.div>
  );
};

export default Projects;

























