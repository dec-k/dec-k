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

export const StarCardHero = () => {
  // State for managing the internal star post data.
  const [starPostData, setStarPostData] = useState<StarCardModel>();

  // State specifically for managing the MD content.
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

  // When/if bodyMd becomes available, fetch it from the URL and parse it on client.
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
