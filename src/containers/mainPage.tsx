import s from "./main.module.css";
import GrowEffect from "../components/GrowEffect.tsx";
import CardsHoverEffect from "../components/CardsHoverEffect/CardsHoverEffect.tsx";
import CustomRange from "../components/CustomRange/CustomSliderRange.tsx";
import CustomRadio from "components/elements/custom-radio.tsx";
import FlexGrowEffect from "components/effects/flex-grow-effect.tsx";

const MainPage = () => {
  return (
    <div className={s.root}>
      <h1>General Page</h1>
      <div className={s.container}>
        <CardsHoverEffect />
        <GrowEffect />
        <CustomRange />
        <CustomRadio />
        <FlexGrowEffect />
      </div>
    </div>
  );
};
export default MainPage;
