import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage.tsx";
import Menu from "./components/menu-02/Menu02.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
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
