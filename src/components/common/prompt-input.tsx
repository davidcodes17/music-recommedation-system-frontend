import React, { useState } from "react";
import { Send } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";

interface PromptInputProps {
  onSend: (prompt: string) => Promise<void>;
}

const moodSuggestions = [
  "happy", "sad", "romantic", "energetic", "study", "gym",
  "party", "relaxed", "confident", "nostalgic",
];

const PromptInput: React.FC<PromptInputProps> = ({ onSend }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      await onSend(prompt);
      setPrompt("");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (mood: string) => {
    setPrompt(mood);
  };

  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-[600px]">
        <div className="flex items-center gap-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 h-20 rounded-xl border border-gray-200 p-3 resize-none outline-none"
            placeholder="Enter a prompt that expresses your mood or feeling..."
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`px-5 cursor-pointer rounded-xl bg-black py-7 text-white flex items-center justify-center ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
          >
            {loading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {moodSuggestions.map((mood) => (
            <button
              key={mood}
              onClick={() => handleSuggestionClick(mood)}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
