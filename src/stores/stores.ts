import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StarCardModel } from "../components/StarCard";

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
  starCardData: StarCardModel[];
  setStarCardData: (d: StarCardModel[]) => void;
}

// This syntax is trippy. See https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md for help.
// Basically, the ()(...) syntax is for working around a quirk in typescript where generics must be redefined.
const useFirebaseStore = create<FirebaseCollectionState>()(
  persist(
    (set) => ({
      starCardData: [],
      setStarCardData: (d) => set(() => ({ starCardData: d })),
    }),
    { name: "firebaseStore" }
  )
);
