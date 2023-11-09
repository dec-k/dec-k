/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardCover, CardContent, Typography, Chip } from "@mui/joy";
import { useFilterStore } from "../stores/stores";

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
  const filter = useFilterStore((state: any) => state.filter);

  return (
    <Card
      component="li"
      sx={{
        minWidth: 300,
        flexGrow: 1,
        ":hover": hoverGrowShadow,
        transition: "all 0.3s ease",
        display: filter === "all" || filter === props.tag ? "inherit" : "none",
      }}
      onClick={() => window.open(props.href, "_blank")}
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
        <Chip>yaaa</Chip>
        <Typography
          level="title-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          {props.title}
        </Typography>
        <Typography level="body-sm" textColor="#fff">
          {props.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
