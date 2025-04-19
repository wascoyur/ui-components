import s from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import Menu from "./menu-02/Menu02.tsx";
import { router } from "./routes/RootRoute.tsx";
import FooterIsolated from "components/footer-01.tsx";

function App() {
  return (
    <div className={s.appRoot}>
      <Menu className={s.menu} />
      <RouterProvider router={router} />
      <FooterIsolated className={s.footer} />
    </div>
  );
}

export default App;
