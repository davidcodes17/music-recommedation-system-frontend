import { create } from "zustand";
import type { UserResponse } from "@/types/auth";

interface AuthState {
  user: UserResponse | null;
  token: string | null;
  login: (data: { user: UserResponse; token: string }) => void;
  logout: () => void;
  setUser: (user: UserResponse) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: ({ user, token }) => set({ user, token }),

  logout: () => set({ user: null, token: null }),

  setUser: (user) => set((state) => ({ ...state, user })),
}));
