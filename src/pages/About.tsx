import { Box, Card, CardContent, CardCover, Typography } from "@mui/joy";

export const About = () => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img src="src\assets\dada.jpg" loading="lazy" />
        </CardCover>
        <CardContent>
          <Typography
            level="title-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            About
          </Typography>
          <Typography level="body-sm" textColor="#fff">
            Life & Skills
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Mystery Juice
          </Typography>
          <Typography level="body-sm" textColor="#fff">
            Reference guide for safely producing your own E-Liquids.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
