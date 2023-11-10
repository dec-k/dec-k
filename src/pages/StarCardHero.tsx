import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/joy";
import { useStarCardStore } from "../stores/stores";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

export const StarCardHero = () => {
  const activeStarCard = useStarCardStore((state) => state.activeStarCard);
  const [mdContent, setMdContent] = useState<string>();

  useEffect(() => {
    if (activeStarCard?.bodyMd) {
      fetch(activeStarCard?.bodyMd)
        .then((response) => response.text())
        .then((text) => {
          setMdContent(text);
        });
    }
  }, [activeStarCard?.bodyMd]);

  return (
    <Card>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={activeStarCard?.src} loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3">{activeStarCard?.title}</Typography>
        <Typography level="body-sm">{activeStarCard?.subtitle}</Typography>
      </CardContent>
      <CardOverflow>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          {mdContent ? (
            <Typography
              level="body-md"
              fontWeight="md"
              textColor="text.secondary"
            >
              <Markdown>{mdContent}</Markdown>
            </Typography>
          ) : (
            <LinearProgress color="neutral" size="lg" />
          )}
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
