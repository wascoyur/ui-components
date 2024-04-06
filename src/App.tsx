import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage.tsx";
import Menu from "./components/menu-02/Menu02.tsx";
import ErrorPage from "./pages/404.tsx";
import MenuTemplate from "./pages/MenuTemplate.tsx";
import { CardsTemplate } from "./pages/CardsTemplate.tsx";

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
  ]);

  return (
    <>
      <Menu />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
