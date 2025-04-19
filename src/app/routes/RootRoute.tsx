import { createBrowserRouter } from "react-router-dom";
import MainPage from "containers/mainPage.tsx";
import ErrorPage from "containers/404.tsx";
import MenuTemplate from "containers/MenuTemplate.tsx";
import { PageCards } from "containers/page-Cards.tsx";
import { GaleryesPage } from "containers/Galeryes-page.tsx";
import { SpinnersPage } from "containers/SpinnersPage.tsx";
import { PageEffects } from "containers/PageEffects.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "menus",
    element: <MenuTemplate />,
  },
  {
    path: "cards",
    element: <PageCards />,
  },
  {
    path: "galeries",
    element: <GaleryesPage />,
  },
  {
    path: "spinners",
    element: <SpinnersPage />,
  },
  {
    path: "effects",
    element: <PageEffects />,
  },
]);
