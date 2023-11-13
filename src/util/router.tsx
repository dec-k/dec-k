import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { StarCardHero } from "../pages/StarCardHero.tsx";
import { StarCardData } from "../constants/StarCardData.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      // Really important note about the props here.
      // I'm too lazy to key these properly, so each StarCardHero must refer to 1 entry in the StarCardData constants.
      // This reminder is for me in case I change something and completely brick a page because I changed a page title.
      {
        path: "/about-me",
        element: (
          <StarCardHero
            data={StarCardData.find((scd) => scd.title === "About Me")!}
          />
        ),
      },
      {
        path: "/about-site",
        element: (
          <StarCardHero
            data={StarCardData.find((scd) => scd.title === "About This Site")!}
          />
        ),
      },
    ],
  },
]);
