import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hover: {
    scale: 3,
    transition: {
      duration: 2,
    },
  },
  tab: { scale: 1, rotate: 45 },
};

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-start"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={"tab"}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
