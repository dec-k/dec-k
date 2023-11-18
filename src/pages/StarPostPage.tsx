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
import { StarPost } from "../components/StarCard";
import { getStarPostById } from "../api/content";
import { firestore } from "../util/firebase";

export const StarPostPage = () => {
  // State for managing the internal star post data.
  const [starPostData, setStarPostData] = useState<StarPost>();

  // State specifically for managing the MD content.
  const [mdContent, setMdContent] = useState<string>();

  // Request the right star post based on route. This happens on page load.
  useEffect(() => {
    const routeDocId = window.location.pathname.split("/").pop()!;
    getStarPostById(firestore, routeDocId).then((resp) =>
      setStarPostData(resp as StarPost)
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
