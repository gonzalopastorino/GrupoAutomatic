import { motion } from "framer-motion";
import { BsCheck2All } from "react-icons/bs";

export default function MessageBubble({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`
        max-w-[80%]
        p-3
        rounded-2xl
        text-sm
        leading-relaxed
        ${
          message.sender === "user"
            ? "ml-auto bg-blue-600 text-white"
            : "bg-zinc-800 text-white"
        }
      `}
    >
      <div>
        <p className="whitespace-pre-wrap">
          {message.text}
        </p>

        {/* Footer del mensaje */}
        <div className="flex items-center justify-end gap-1 mt-2">

          {/* Hora */}
          <span className="text-[11px] opacity-70">
            {message.time}
          </span>

          {/* Check usuario */}
          {message.sender === "user" && (
            <BsCheck2All className="text-blue-200 text-sm" />
          )}

        </div>
      </div>
    </motion.div>
  );
}