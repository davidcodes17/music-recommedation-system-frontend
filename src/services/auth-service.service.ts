import api_secured from "@/security/api-secured";
import type { CreateAccountUser, LoginUser } from "@/types/auth";

export const login = async ({ data }: { data: LoginUser }) => {
  try {
    const response = await api_secured.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.error("Login error:", error?.response?.data || error.message);
    return error?.response?.data || error.message;
  }
};
export const create_account = async ({ data }: { data: CreateAccountUser }) => {
  try {
    const response = await api_secured.post("/auth/signup", data);
    return response.data;
  } catch (error: any) {
    console.error("Sign Up error:", error?.response?.data || error.message);
    return error?.response?.data || error.message;
  }
};
