import s from "./menu.module.css";
import classnames from "classnames";

const Menu = () => {
  return (
    <div className={s.root}>
      <div className={s.menu__bar}>
        <Navigation />
      </div>
    </div>
  );
};

const Navigation = () => {
  const menuItems = () => {
    const items: { name: string; path: string }[] = Array.from([
      { name: `Домой`, path: `/` },
      { name: `Менюшки`, path: `menus` },
      { name: `Карточки`, path: `cards` },
      { name: `Galery`, path: `galeries` },
      // `Кнопки`,
      // `Продуктовые карточки`,
      // `футер`,
      // "галерея",
      // "поле ввода",
      // "Логин",
      // "Нотифай",
      // "Параллакс",
      // "Оценка",
      // "Карточка профиля",
      // "Реакт примеры",
      // "Скролл",
      // "сайдбар",
      // "социконки",
    ]);
    return items.map((i, index) => (
      <li key={index}>
        <a href={i.path}>{i.name}</a>
      </li>
    ));
  };

  return <ul className={classnames(s.navigation)}>{menuItems()}</ul>;
};
export default Menu;
