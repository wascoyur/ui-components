import s from "./FloatItem.module.css";

export const FloatItem = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.avatar}>
          <a href="">
            <img src="/src/assets/icons/search.svg" alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
