import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { StarCardHero } from "../pages/StarCardHero.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      // Really important note for pages using StarCards!
      // The path MUST align with the ID of the document you're requesting from the gcloud bucket.
      {
        path: "/about-me",
        element: <StarCardHero />,
      },
      {
        path: "/about-site",
        element: <StarCardHero />,
      },
    ],
  },
]);
