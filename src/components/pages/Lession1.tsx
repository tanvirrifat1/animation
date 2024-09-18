import { motion } from "framer-motion";

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg"
        animate={{ rotate: 360 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 3, type: "spring" }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
