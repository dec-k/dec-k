import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filter: "all",

  setFilter: (f: string) => set(() => ({ filter: f })),
}));
