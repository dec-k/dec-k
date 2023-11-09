/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip } from "@mui/joy";
import { useFilterStore } from "../stores/stores";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export const FilterChips = () => {
  const filter = useFilterStore((state: any) => state.filter);
  const setFilter = useFilterStore((state: any) => state.setFilter);

  return (
    <>
      {/* filter chips */}
      <Chip
        color="neutral"
        startDecorator={filter === "all" && <SentimentSatisfiedAltIcon />}
        onClick={() => setFilter("all")}
      >
        all
      </Chip>
      <Chip
        color="warning"
        startDecorator={filter === "projects" && <SentimentSatisfiedAltIcon />}
        onClick={() => setFilter("projects")}
      >
        projects
      </Chip>
      <Chip
        color="danger"
        startDecorator={filter === "articles" && <SentimentSatisfiedAltIcon />}
        onClick={() => setFilter("articles")}
      >
        articles
      </Chip>
      <Chip
        color="success"
        startDecorator={filter === "fluff" && <SentimentSatisfiedAltIcon />}
        onClick={() => setFilter("fluff")}
      >
        fluff
      </Chip>
    </>
  );
};
