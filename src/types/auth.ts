import type { Prompt } from "./prompt";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  prompts?: Prompt[]; // Optional since it's a relation
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface CreateAccountUser {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
    message: string;
    token: string;
    user: UserResponse;
}
