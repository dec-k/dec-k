import { create } from "zustand";
import { StarCardProps } from "../components/StarCard";
import { createJSONStorage, persist } from "zustand/middleware";

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

export const useStarCardStore = create<StarCardState>()(
  persist(
    (set) => ({
      activeStarCard: null,
      setStarCard: (s) => set(() => ({ activeStarCard: s })),
    }),
    {
      name: "starcard-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
