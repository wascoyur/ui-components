import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./containers/mainPage.tsx";
import Menu from "./components/menu-02/Menu02.tsx";
import ErrorPage from "./containers/404.tsx";
import MenuTemplate from "./containers/MenuTemplate.tsx";
import { CardsTemplate } from "./containers/CardsTemplate.tsx";
import { Galeryes } from "containers/Galeryes.tsx";

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
      element: <CardsTemplate />,
    },
    {
      path: "galeries",
      element: <Galeryes />,
    },
  ]);

  return (
    <>
      <Menu />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
