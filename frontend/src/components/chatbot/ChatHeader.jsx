import { FiX } from "react-icons/fi";

export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-black p-4 border-b border-zinc-800 flex items-center justify-between">
      <div>
        <h1 className="text-white font-bold text-lg">
          Asistente IA
        </h1>

        <p className="text-zinc-400 text-sm">
          Automatización inteligente
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-white hover:text-red-400 transition"
      >
        <FiX size={24} />
      </button>
    </div>
  );
}