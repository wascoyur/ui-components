import s from "./ThreeDots.module.css";

export const ThreeDots = () => {
  return (
    <div className={s.root}>
      <div className={s.loader}>
        <span className={s.item}></span>
        <span className={s.item}></span>
        <span className={s.item}></span>
      </div>
    </div>
  );
};
