import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiHtml5, SiCss3, SiAdobe, SiExpress, SiAdobephotoshop } from "react-icons/si";
import { FaFigma, FaNodeJs, FaSketch } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Дизайнерські інструменти */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Figma"
        >
          <FaFigma className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Adobe XD"
        >
          <SiAdobe className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Sketch"
        >
          <FaSketch className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Photoshop"
        >
          <SiAdobephotoshop className="text-7xl text-blue-500" />
        </motion.div>

        {/* Інші технології */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="React"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Node.js"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="Express.js"
        >
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="HTML5"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
          title="CSS3"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;



