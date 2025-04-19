import s from "./main.module.css";
import { Pulser } from "components/effects/pulser/Pulser.tsx";

const MainPage = () => {
  return (
    <div className={s.root}>
      <h1>General Page</h1>
      <div className={s.container}>
        <div className={s.item}>
          <Pulser />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
