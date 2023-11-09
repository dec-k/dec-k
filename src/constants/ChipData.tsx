export interface TagChip {
  colour: "neutral" | "warning" | "success" | "danger";
  name: string;
}

export const TagChipData: TagChip[] = [
  {
    colour: "neutral",
    name: "all",
  },
  {
    colour: "warning",
    name: "projects",
  },
  {
    colour: "danger",
    name: "articles",
  },
  {
    colour: "success",
    name: "fluff",
  },
];
