import { Box, Card, CardContent, CardCover, Typography } from "@mui/joy";

const cardTint: string =
  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 300px)";

const hoverGrowShadow = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  transform: "scale(1.01)",
};

export const About = () => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      {/* about */}
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          ":hover": hoverGrowShadow,
          transition: "all 0.3s ease",
        }}
      >
        <CardCover>
          <img src="src\assets\dada.jpg" loading="lazy" />
        </CardCover>
        <CardCover
          sx={{
            background: cardTint,
          }}
        />
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

      {/* mj */}
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          cursor: "pointer",
          ":hover": hoverGrowShadow,
          transition: "all 0.3s ease",
        }}
        onClick={() =>
          window.open("https://mysteryjuice.vercel.app/", "_blank")
        }
      >
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
          />
        </CardCover>
        <CardCover
          sx={{
            background: cardTint,
          }}
        />
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

      {/* article 1 */}
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          cursor: "pointer",
          ":hover": hoverGrowShadow,
          transition: "all 0.3s ease",
        }}
        onClick={() =>
          window.open(
            "https://medium.com/@dec.keighley/environment-ego-and-autonomy-d8283fdee56b",
            "_blank"
          )
        }
      >
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
          />
        </CardCover>
        <CardCover
          sx={{
            background: cardTint,
          }}
        />
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Environment, Ego & Autonomy
          </Typography>
          <Typography level="body-sm" textColor="#fff">
            Article about enriching development teams.
          </Typography>
        </CardContent>
      </Card>

      {/* comingsoon */}
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          ":hover": hoverGrowShadow,
          transition: "all 0.3s ease",
        }}
      >
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
          />
        </CardCover>
        <CardCover
          sx={{
            background: cardTint,
          }}
        />
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Gamified Task Tracker
          </Typography>
          <Typography level="body-sm" textColor="#fff">
            More info coming soon.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
