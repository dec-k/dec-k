import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { useStarCardStore } from "../stores/stores";

export const AboutMe = () => {
  const activeStarCard = useStarCardStore((state) => state.activeStarCard);

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
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Divider orientation="horizontal" />
          <Typography
            level="body-md"
            fontWeight="md"
            textColor="text.secondary"
          >
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
