export default function ChatInput({
  input,
  setInput,
  sendMessage,
  handleKeyDown,
}) {
  return (
    <div className="p-4 border-t border-zinc-200 flex gap-2">

      <input
        type="text"
        placeholder="Escribí un mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          flex-1
          bg-zinc-100
          text-black
          rounded-xl
          px-4
          py-3
          outline-none
        "
      />

      <button
        onClick={sendMessage}
        className="
          bg-blue-600
          hover:bg-blue-700
          transition
          px-5
          rounded-xl
          text-white
          font-bold
        "
      >
        →
      </button>

    </div>
  );
}