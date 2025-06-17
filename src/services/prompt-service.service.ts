import api_secured from "@/security/api-secured";
import type { PromptPayload } from "@/types/prompt";

export const send_prompt = async ({ data }: { data: PromptPayload }) => {
  try {
    const response = await api_secured.post("/music/recommend", data);
    return response.data;
  } catch (error: any) {
    console.error("Prompt error:", error?.response?.data || error.message);
    return error?.response?.data || error.message;
  }
};