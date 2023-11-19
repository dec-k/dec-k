import { Box } from "@mui/joy";
import { StarCard, StarPost } from "../components/StarCard";
import { getStarPosts } from "../api/content";
import { firestore } from "../util/firebase";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [starPosts, setStarPosts] = useState<StarPost[]>([]);

  useEffect(() => {
    // fetch card data on load
    getStarPosts(firestore).then((resp) =>
      setStarPosts(
        // sort the resulting posts based on the optional Order field.
        resp.sort((a, b) => {
          const orderA =
            a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
          const orderB =
            b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;

          return orderA - orderB;
        })
      )
    );
  }, []);

  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      {starPosts.map((sp, i) => (
        <StarCard
          key={i}
          href={sp.href}
          title={sp.title}
          subtitle={sp.subtitle}
          tag={sp.tag}
          src={sp.src}
          bodyMd={sp.bodyMd}
        />
      ))}
    </Box>
  );
};
