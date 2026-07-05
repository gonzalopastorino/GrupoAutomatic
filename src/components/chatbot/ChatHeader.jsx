import { FiX } from "react-icons/fi";

export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-white p-4 border-b border-zinc-200 flex items-center justify-between">
      <div>
        <h1 className="text-black font-bold text-lg">
          Asistente IA
        </h1>

        <p className="text-zinc-500 text-sm">
          Automatización inteligente
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-black hover:text-red-500 transition"
      >
        <FiX size={24} />
      </button>
    </div>
  );
}