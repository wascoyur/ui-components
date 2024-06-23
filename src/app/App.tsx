import "../App.css";
import { RouterProvider } from "react-router-dom";
import Menu from "./menu-02/Menu02.tsx";
import { router } from "./routes/RootRoute.tsx";

function App() {
  return (
    <>
      <Menu />
      <RouterProvider router={router} />
      {/*<FooterIsolated />*/}
    </>
  );
}

export default App;
