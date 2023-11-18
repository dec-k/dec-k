import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/joy";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { StarCardModel } from "../components/StarCard";
import { getStarCardById } from "../api/content";
import { Firestore } from "../util/firebase";

export interface StarCardHeroProps {
  data: StarCardModel;
}

export const StarCardHero = (props: StarCardHeroProps) => {
  const [starPostData, setStarPostData] = useState<StarCardModel>();
  const [mdContent, setMdContent] = useState<string>();

  // Request the right star post based on route. This happens on page load.
  useEffect(() => {
    // Grab the last chunk of the current route, which will align with a doc id in firestore.
    const routeDocId = window.location.pathname.split("/").pop()!;
    getStarCardById(Firestore, routeDocId).then((resp) =>
      // TODO this isn't super safe. Considering revisiting the typesafety of this in the future. Maybe.
      setStarPostData(resp as StarCardModel)
    );
  }, []);

  useEffect(() => {
    if (starPostData?.bodyMd) {
      fetch(starPostData.bodyMd)
        .then((response) => response.text())
        .then((text) => {
          console.log("tried to parse md as:", text);
          setMdContent(text);
        });
    }
  }, [starPostData?.bodyMd]);

  return (
    <Card>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={starPostData?.src} loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3">{starPostData?.title}</Typography>
        <Typography level="body-sm">{starPostData?.subtitle}</Typography>
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
