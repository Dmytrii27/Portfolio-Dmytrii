import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/Hero page 3.png";
import jobfii from "../assets/projects/jobfii.png";

export const HERO_CONTENT = `I am a passionate UX/UI designer with a strong interest in creating intuitive and visually appealing user interfaces. Although I don't have formal experience, I have been actively learning design principles and tools like Figma, Sketch, and Adobe XD. I am constantly working on enhancing my understanding of user behavior and interaction to craft designs that are both functional and aesthetically pleasing.`;

export const ABOUT_TEXT = `I am a passionate UX/UI designer with a strong interest in creating intuitive and visually appealing user interfaces. Although I don't have formal experience, I have been actively learning design principles and tools like Figma, Sketch, and Adobe XD. I am constantly working on enhancing my understanding of user behavior and interaction to craft designs that are both functional and aesthetically pleasing.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Jobfi.ca - Job Search Platform",
    image: jobfii, 
    description:
      "Jobfica is a responsive job search platform that helps users easily find job opportunities on any device. With a clean, intuitive interface, both job seekers and employers can navigate the site efficiently to browse listings, post jobs, and apply seamlessly.",
    technologies: ["HTML", "CSS","JavaScript", "MongoDB","Express.js","React", "Node.js","Tailwind"],
    link: "https://jobfica.netlify.app/",
  },
];

export const CONTACT = {
  address: "12 Avenue SW, Calgary, T2R 0X5",
  phoneNo: "+1 587 577 8991",
  email: "dmytriisatsiuk@gmail.com",
};

