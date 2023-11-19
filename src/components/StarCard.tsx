import { Card, CardCover, CardContent, Typography, Chip } from "@mui/joy";
import { FilterState, useFilterStore } from "../stores/stores";
import { TagChipData } from "../constants/ChipData";
import { useNavigate } from "react-router-dom";

const cardTint: string =
  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 300px)";

const hoverGrowShadow = {
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  transform: "scale(1.01)",
};

export interface StarPost {
  title: string;
  subtitle: string;
  tag: string; // tag group, used for filtering ( todo: constrain the tags to a supported type to prevent typos, etc.)
  src: string; // reference to the image content that shows on the card and hero page.
  href: string; // link to the actual content, either a url or an internal route.
  order?: number; // optional order. lower numbers will show first on the home page.
  bodyMd?: string; // optional md. provide a link to hosted MD content, used for internal route pages.
}

export const StarCard = (props: StarPost) => {
  const navigate = useNavigate();

  const filter = useFilterStore((state: FilterState) => state.filter);
  const chipTag = TagChipData.find((chipData) => chipData.name === props.tag)!;

  return (
    <Card
      component="li"
      sx={{
        minWidth: 300,
        flexGrow: 1,
        transition: "all 0.3s ease",
        display: filter === "all" || filter === props.tag ? "inherit" : "none",

        // Only apply hover and cursor changes when the link actually has non-stubbed. Makes stub content act unclickable.
        ":hover": props.href === "/" ? null : hoverGrowShadow,
        cursor: props.href === "/" ? "default" : "pointer",
      }}
      onClick={() => {
        // use window.open for external links and navigate() for internal routes.
        if (props.href.includes("https://")) {
          window.open(props.href, "_blank");
        } else {
          navigate(props.href);
        }
      }}
    >
      <CardCover>
        <img src={props.src} loading="lazy" />
      </CardCover>
      <CardCover
        sx={{
          background: cardTint,
        }}
      />
      <CardContent>
        {/* Tag */}
        <Chip size="sm" color={chipTag.colour}>
          {chipTag.name}
        </Chip>

        {/* title */}
        <Typography
          level="title-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          {props.title}
        </Typography>

        {/* subtitle */}
        <Typography level="body-sm" textColor="#fff">
          {props.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
