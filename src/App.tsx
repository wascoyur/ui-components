import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./containers/mainPage.tsx";
import Menu from "./components/menu-02/Menu02.tsx";
import ErrorPage from "./containers/404.tsx";
import MenuTemplate from "./containers/MenuTemplate.tsx";
import { PageCards } from "containers/page-Cards.tsx";
import { GaleryesPage } from "containers/Galeryes-page.tsx";
import { SpinnersPage } from "containers/SpinnersPage.tsx";
import FooterIsolated from "components/footer-01.tsx";

function App() {
  const router = createBrowserRouter([
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
  ]);

  return (
    <>
      <Menu />
      <RouterProvider router={router} />
      <FooterIsolated />
    </>
  );
}

export default App;
