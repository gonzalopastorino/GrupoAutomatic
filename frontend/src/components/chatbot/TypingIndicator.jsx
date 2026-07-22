import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-zinc-800 text-white p-3 rounded-2xl w-fit"
    >
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
      </div>
    </motion.div>
  );
}