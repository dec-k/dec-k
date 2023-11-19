import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StarPost } from "../components/StarCard";

// todo: consider splitting the stores out to sep files. at this stage proj is small enough to not worry about it.

// Filtering
export interface FilterState {
  filter: string;
  setFilter: (f: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "all",

  setFilter: (f) => set(() => ({ filter: f })),
}));

// Firebase-related data.
export interface FirebaseCollectionState {
  starCardData: StarPost[];
  setStarCardData: (d: StarPost[]) => void;
}

// This syntax is trippy. See https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md for help.
// Basically, the ()(...) syntax is for working around a quirk in typescript where generics must be redefined.
export const useFirebaseStore = create<FirebaseCollectionState>()(
  persist(
    (set) => ({
      starCardData: [],
      setStarCardData: (d) => set(() => ({ starCardData: d })),
    }),
    { name: "firebaseStore" }
  )
);
