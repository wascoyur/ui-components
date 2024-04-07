import s from "./main.module.css";
import GrowEffect from "../components/GrowEffect.tsx";
import CardsHoverEffect from "../components/CardsHoverEffect/CardsHoverEffect.tsx";
import CustomRange from "../components/CustomRange/CustomSliderRange.tsx";

const MainPage = () => {
  return (
    <div className={s.root}>
      <h1>General Page</h1>
      <div className={s.container}>
        <CardsHoverEffect />
        <GrowEffect />
        <CustomRange />
      </div>
    </div>
  );
};
export default MainPage;
