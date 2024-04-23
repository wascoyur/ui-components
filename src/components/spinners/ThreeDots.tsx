import s from "./ThreeDots.module.css";
/*https://codepen.io/petersonby/pen/gzxpdj*/
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
