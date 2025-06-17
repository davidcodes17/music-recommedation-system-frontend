import type { User } from "./auth";

export interface Prompt {
  id: number;
  text: string;
  createdAt: Date;
  User?: User | null; // Optional/nullable relation
  userId?: number | null; // Optional foreign key
}

export interface PromptPayload {
  prompt: string;
  email: string;
}

export interface Track {
  name: string;
  artist: string;
  url: string;
  preview: string | null;
}

export interface GenreTrackResponse {
  genre: string;
  tracks: Track[];
}
