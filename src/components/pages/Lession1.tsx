import { motion } from "framer-motion";

const parent = {
  fst: { opacity: 0, scale: 0.9 },
  lst: { opacity: 1, scale: 1 },
};

const child = {
  fst: { opacity: 0, scale: 0.9 },
  lst: { opacity: 1, scale: 1 },
};

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-start"
        variants={parent}
        initial="fst"
        animate="lst"
        transition={{
          ease: "easeInOut",
          duration: 2,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          className="size-20 bg-cyan-500 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-500 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-500 rounded-md"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-500 rounded-md"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson1;
