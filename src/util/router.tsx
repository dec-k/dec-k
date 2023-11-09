import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { AboutMe } from "../pages/AboutMe.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);
