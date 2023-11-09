import { Avatar, Stack, Typography } from "@mui/joy";

export const Header = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ marginBottom: "16px" }}>
      <Avatar
        alt="dec-k Github Avatar"
        src="https://avatars.githubusercontent.com/u/15150794?v=4"
        size="lg"
      />
      <Typography level="h1">dec-k</Typography>
    </Stack>
  );
};
