import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CharactersPage from "./pages/CharactersPage";
import CharactersDetailPage from "./pages/CharactersDetailPage";
import RootLayout from "./pages/RootLayout";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "characters",
        element: <CharactersPage />,
      },
      {
        path: "characters/:characterId",
        element: <CharactersDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
  // </React.StrictMode>
);
