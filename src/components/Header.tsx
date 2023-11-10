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
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        paddingBottom: "16px",
        backgroundColor: "#FFF",
      }}
      justifyContent={"space-between"}
    >
      <Stack direction="row" spacing={2}>
        {/* avatar and title */}
        <Avatar
          alt="dec-k Github Avatar"
          src="https://avatars.githubusercontent.com/u/15150794?v=4"
          size={matches ? "lg" : "sm"}
        />
        <Typography level={matches ? "h1" : "h4"}>dec-k</Typography>
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

        {/* li */}
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
