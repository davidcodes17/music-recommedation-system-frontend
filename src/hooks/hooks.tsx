import { create_account, login } from "@/services/auth-service.service";
import { send_prompt } from "@/services/prompt-service.service";
import type { CreateAccountUser, LoginUser } from "@/types/auth";
import type { PromptPayload } from "@/types/prompt";

export const useLogin = async ({ data }: { data: LoginUser }) => {
  try {
    const response = await login({ data });
    return response;
  } catch (err) {
    console.error("useLogin error:", err);
    throw err;
  }
};
export const useCreateAccount = async ({
  data,
}: {
  data: CreateAccountUser;
}) => {
  try {
    const response = await create_account({ data });
    return response;
  } catch (err) {
    console.error("useSignup error:", err);
    throw err;
  }
};
export const useSendPrompt = async ({ data }: { data: PromptPayload }) => {
  try {
    const response = await send_prompt({ data });
    return response;
  } catch (err) {
    console.error("usePrompt error:", err);
    throw err;
  }
};
