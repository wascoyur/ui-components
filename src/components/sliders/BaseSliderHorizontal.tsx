import s from "./BaseSlider.module.css";

export const BaseSliderHorizontal = () => {
  return (
    <div className={s.slider}>
      <div className={s.slide}>Слайд 1</div>
      <div className={s.slide}>Слайд 2</div>
      <div className={s.slide}>Слайд 3</div>
      <div className={s.slide}>Слайд 4</div>
    </div>
  );
};
