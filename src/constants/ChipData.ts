export const SupportedFilters = [
  "all",
  "projects",
  "articles",
  "fluff",
] as const;

export interface TagChip {
  colour: "neutral" | "warning" | "success" | "danger";
  name: (typeof SupportedFilters)[number];
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
