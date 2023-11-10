import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { useStarCardStore } from "../stores/stores";

// todo: abstract into a starcard hero page, as youll probably want a couple similarly structured pages.
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
      <CardOverflow>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          {/* Todo: this needs to be moved to a datastore/constants file. not reusable. */}
          <Typography
            level="body-md"
            fontWeight="md"
            textColor="text.secondary"
          >
            Hi! Thanks for visiting. I'm an experienced software developer
            focused on Web solutions for businesses.
            <br />
            <br />I believe in developing practical, empathy-driven solutions
            that puts User Experience first.
            <br />
            <br />
            My favourite technologies to work with are <b>TypeScript</b>,{" "}
            <b>Next.js</b>, <b>Vite + React</b>, and <b>C#</b>.
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
