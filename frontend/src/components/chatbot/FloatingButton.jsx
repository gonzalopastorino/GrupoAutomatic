import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

export default function FloatingButton({ onClick }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="
        fixed
        bottom-5
        right-5
        bg-blue-600
        hover:bg-blue-700
        text-white
        p-4
        rounded-full
        shadow-2xl
        transition
        z-50
      "
    >
      <FiMessageCircle size={28} />
    </motion.button>
  );
}