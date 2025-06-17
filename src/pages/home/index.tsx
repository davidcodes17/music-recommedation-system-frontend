import { useAuthStore } from "@/store/auth-store";
import PromptInput from "@/components/common/prompt-input";
import Header from "@/layouts/header";
import { useSendPrompt } from "@/hooks/hooks";
import type { GenreTrackResponse, PromptPayload } from "@/types/prompt";
import { useState } from "react";
import { toast } from "react-toastify";
import TrackList from "@/layouts/track-list";

const Home = () => {
  const { user } = useAuthStore();
  const [data, setData] = useState<GenreTrackResponse | null>(null);

  const sendPrompt = async (prompt: string) => {
    setData(null); // reset before fetching

    const payload: PromptPayload = {
      email: user?.email || "N/A",
      prompt,
    };

    try {
      const response: GenreTrackResponse = await useSendPrompt({ data: payload });

      if (response?.tracks) {
        setData(response);
      } else {
        toast("No tracks found.", { type: "warning" });
      }
    } catch (error) {
      toast("An error occurred while sending your prompt.", { type: "error" });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fafafa] flex flex-col">
      <Header />

      <main className="flex-grow pt-5 px-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <TrackList data={data} />
        </div>
      </main>

      <PromptInput onSend={sendPrompt} />
    </div>
  );
};

export default Home;
