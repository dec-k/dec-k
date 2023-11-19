import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { StarPostPage } from "../pages/StarPostPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      // Really important note for pages that rely on the starPost collection.
      // The path MUST align with the ID of the document you're requesting from the gcloud bucket.
      {
        path: "/about-me",
        element: <StarPostPage />,
      },
      {
        path: "/about-site",
        element: <StarPostPage />,
      },
    ],
  },
]);
