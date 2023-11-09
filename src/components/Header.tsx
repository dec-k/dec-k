import { Avatar, Box, IconButton, Stack, Typography } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

export const Header = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ marginBottom: "16px" }}>
      {/* avatar and title */}
      <Avatar
        alt="dec-k Github Avatar"
        src="https://avatars.githubusercontent.com/u/15150794?v=4"
        size="lg"
      />
      <Typography level="h1">dec-k</Typography>

      {/* socials */}
      <Box
        sx={{
          display: "flex",
          gap: 200,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => window.open("https://github.com/dec-k", "_blank")}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/declan-keighley-b19265a6/",
              "_blank"
            )
          }
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Stack>
  );
};
