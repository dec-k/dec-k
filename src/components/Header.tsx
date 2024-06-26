/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  Stack,
  Typography,
} from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import { FilterChips } from "./FilterChips";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  // Layout hook to change if we're on small screens.
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    // Adds a listener for when viewport drops below a certain width, switches various layout elems.
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        borderRadius: 20,
        px: 2,
        py: 1,
        mx: 0.5,
        mt: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Glass effect background color
        backdropFilter: "blur(10px)", // Glass effect blur
        position: "sticky",
        top: 8,
        zIndex: 1000, // Ensures the header is above other content
      }}
      justifyContent={"space-between"}
    >
      <Stack
        direction="row"
        gap={2}
        sx={{ cursor: "pointer" }}
        alignItems={"center"}
      >
        {/* avatar and title */}
        <Avatar
          alt="dec-k Github Avatar"
          src="https://avatars.githubusercontent.com/u/15150794?v=4"
          size={matches ? "md" : "sm"}
          onClick={() => navigate("/")}
        />
        <Typography level={matches ? "h2" : "h4"} onClick={() => navigate("/")}>
          dec<span style={{ color: "grey" }}>dev</span>
        </Typography>
      </Stack>

      {/* socials + filters */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* chippies, only rendered on root route. */}
        {window.location.pathname === "/" ? (
          matches ? (
            <FilterChips />
          ) : (
            <Dropdown>
              <MenuButton variant="soft">
                <Apps />
              </MenuButton>
              <Menu sx={{ padding: "8px" }}>
                <Stack spacing={1}>
                  <FilterChips />
                </Stack>
              </Menu>
            </Dropdown>
          )
        ) : (
          <Chip
            color="primary"
            onClick={() => navigate("/")}
            startDecorator={<HomeIcon />}
          >
            home
          </Chip>
        )}

        {/* divider */}
        <Divider orientation="vertical" />

        {/* gh */}
        <IconButton
          onClick={() => window.open("https://github.com/dec-k", "_blank")}
        >
          <GitHubIcon />
        </IconButton>

        {/* li - hidden on mobile. nobody gives a shit about linkedin anyway.*/}
        {matches && (
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
        )}

        {/* mail */}
        <IconButton
          onClick={() => window.open("mailto:dec.keighley@gmail.com", "_self")}
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};
