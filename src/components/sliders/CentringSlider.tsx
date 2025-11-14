import s from "./CentringSlider.module.css";

export const CentringSlider = () => {
  return (
    <>
      <div className={s.slider}>
        <div className={s.slide}>A</div>
        <div className={s.slide}>B</div>
        <div className={s.slide}>C</div>
      </div>
      <div className={s.dots}>
        <button aria-label="1"></button>
        <button aria-label="2"></button>
        <button aria-label="3"></button>
      </div>
      ;
    </>
  );
};
