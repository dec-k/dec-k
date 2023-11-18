import { Box } from "@mui/joy";
import { StarCardData } from "../constants/StarCardData";
import { StarCard } from "../components/StarCard";
import { getStarCardData } from "../api/content";
import { Firestore } from "../util/firebase";
import { useEffect } from "react";

export const HomePage = () => {
  // todo remove this call later, demo.
  useEffect(() => {
    getStarCardData(Firestore).then((resp) => console.log(resp));
  }, []);

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
