import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const RootLayout = () => {
  return (
    <Box
      sx={{
        maxWidth: "968px",
        border: "1px solid red",
        margin: "auto",
        padding: "16px",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};
