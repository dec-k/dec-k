import { Box } from "@mui/joy";
import { StarCard, StarCardModel } from "../components/StarCard";
import { getStarCards } from "../api/content";
import { Firestore } from "../util/firebase";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [starPosts, setStarPosts] = useState<StarCardModel[]>([]);

  useEffect(() => {
    // fetch card data on load
    getStarCards(Firestore).then((resp) =>
      setStarPosts(resp as StarCardModel[])
    );
  }, []);

  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
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
