import { Box } from "@mui/joy";
import { StarCardData } from "../constants/StarCardData";
import { StarCard } from "../components/StarCard";

export const HomePage = () => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      {StarCardData.map((scd) => (
        <StarCard
          href={scd.href}
          title={scd.title}
          subtitle={scd.subtitle}
          tag={scd.tag}
          src={scd.src}
          bodyMd={scd.bodyMd}
        />
      ))}
    </Box>
  );
};
