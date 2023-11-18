import { Box } from "@mui/joy";
import { StarCard, StarPost } from "../components/StarCard";
import { getStarPosts } from "../api/content";
import { firestore } from "../util/firebase";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [starPosts, setStarPosts] = useState<StarPost[]>([]);

  useEffect(() => {
    // fetch card data on load
    getStarPosts(firestore).then((resp) => setStarPosts(resp as StarPost[]));
  }, []);

  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
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
