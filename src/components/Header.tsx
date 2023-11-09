/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Divider,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Apps from "@mui/icons-material/Apps";
import { FilterChips } from "./FilterChips";
import { useEffect, useState } from "react";

export const Header = () => {
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
        <Typography level={matches ? "h1" : "h3"}>dec-k</Typography>
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
        {/* chippies */}
        {matches ? (
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
      </Box>
    </Stack>
  );
};
