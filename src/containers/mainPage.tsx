import s from "./main.module.css";
import GrowEffect from "./GrowEffect.tsx";

const MainPage = () => {
  return (
    <div className={s.root}>
      <h1>General Page</h1>
      <div className={s.container}>
        <GrowEffect />
      </div>
    </div>
  );
};
export default MainPage;
