import { Chip } from "@mui/joy";
import { useFilterStore } from "../stores/stores";
import FilterListIcon from "@mui/icons-material/FilterList";
import { TagChipData } from "../constants/ChipData";

export const FilterChips = () => {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);

  return (
    <>
      {/* filter chips */}
      {TagChipData.map((tagChip) => (
        <Chip
          color={tagChip.colour}
          startDecorator={filter === tagChip.name && <FilterListIcon />}
          onClick={() => setFilter(tagChip.name)}
        >
          {tagChip.name}
        </Chip>
      ))}
    </>
  );
};
