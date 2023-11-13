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

export interface StarCardHeroProps {
  starCardData: StarCardModel;
}

export const StarCardHero = (props: StarCardHeroProps) => {
  const [mdContent, setMdContent] = useState<string>();

  useEffect(() => {
    if (props.starCardData?.bodyMd) {
      fetch(props.starCardData?.bodyMd)
        .then((response) => response.text())
        .then((text) => {
          setMdContent(text);
        });
    }
  }, [props.starCardData?.bodyMd]);

  return (
    <Card>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={props.starCardData?.src} loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3">{props.starCardData?.title}</Typography>
        <Typography level="body-sm">{props.starCardData?.subtitle}</Typography>
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
