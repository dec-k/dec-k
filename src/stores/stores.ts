import { create } from "zustand";
import { StarCardProps } from "../components/StarCard";

// Filtering
export interface FilterState {
  filter: string;
  setFilter: (f: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "all",

  setFilter: (f) => set(() => ({ filter: f })),
}));

// Star Cards
export interface StarCardState {
  activeStarCard: StarCardProps | null;

  setStarCard: (s: StarCardProps) => void;
}

export const useStarCardStore = create<StarCardState>((set) => ({
  activeStarCard: null,

  setStarCard: (s) => set(() => ({ activeStarCard: s })),
}));
