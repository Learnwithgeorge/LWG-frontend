/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export default function WhiteBtn({ text, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer bg-white text-accent w-fit px-5 h-[44px] rounded-lg text-lg font-extrabold flex items-center justify-center gap-2 shadow-lg"
    >
      <p>{text}</p>
      <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}
