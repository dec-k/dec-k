import { Box } from "@mui/joy";
import { StarCardData } from "../constants/StarCardData";
import { StarCard, StarCardModel } from "../components/StarCard";
import { getStarCardData } from "../api/content";
import { Firestore } from "../util/firebase";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [starPosts, setStarPosts] = useState<StarCardModel[]>([]);

  useEffect(() => {
    // fetch card data on load
    getStarCardData(Firestore).then((resp) =>
      setStarPosts(resp as StarCardModel[])
    );
  }, []);

  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      {/* Localised Version
      {StarCardData.map((scd, i) => (
        <StarCard
          key={i}
          href={scd.href}
          title={scd.title}
          subtitle={scd.subtitle}
          tag={scd.tag}
          src={scd.src}
          bodyMd={scd.bodyMd}
        />
      ))} */}

      {/* API Version */}
      {starPosts.map((scd, i) => (
        <StarCard
          key={i}
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
