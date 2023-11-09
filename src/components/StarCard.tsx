/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardCover, CardContent, Typography, Chip } from "@mui/joy";
import { useFilterStore, useStarCardStore } from "../stores/stores";
import { TagChipData } from "../constants/ChipData";
import { useNavigate } from "react-router-dom";

const cardTint: string =
  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 300px)";

const hoverGrowShadow = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  transform: "scale(1.01)",
};

export interface StarCardProps {
  title: string;
  subtitle: string;
  tag: string;
  src: string;
  href: string;
}

export const StarCard = (props: StarCardProps) => {
  const navigate = useNavigate();

  const filter = useFilterStore((state: any) => state.filter);
  const chipTag = TagChipData.find((chipData) => chipData.name === props.tag)!;

  const setStarCard = useStarCardStore((state) => state.setStarCard);

  return (
    <Card
      component="li"
      sx={{
        minWidth: 300,
        flexGrow: 1,
        ":hover": hoverGrowShadow,
        transition: "all 0.3s ease",
        display: filter === "all" || filter === props.tag ? "inherit" : "none",
        cursor: "pointer",
      }}
      onClick={() => {
        // use window.open for external links and navigate() for internal routes.
        if (props.href.includes("https://")) {
          window.open(props.href, "_blank");
        } else {
          // Update star card store before redirecting, in case destination route needs to consume meta from this card.
          setStarCard(props);
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
