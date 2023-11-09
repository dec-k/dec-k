import { create } from "zustand";

export interface FilterState {
  filter: string;
  setFilter: (f: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "all",

  setFilter: (f) => set(() => ({ filter: f })),
}));
