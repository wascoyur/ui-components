import s from "./menu.module.css";
import cn from "classnames";

const Menu = ({className}:{className?:string}) => {
  return (
    <div className={cn(s.root,className)}>
      <div className={s.menuBar}>
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
      { name: `Spinners`, path: `spinners` },
      { name: `Effects`, path: `effects` },
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

  return <ul className={cn(s.navigation)}>{menuItems()}</ul>;
};
export default Menu;
