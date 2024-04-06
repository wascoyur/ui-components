import React, { useState } from "react";
import s from "./menu.module.css";
import { CloseIcon } from "./CloseIcon";
import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "./Logo";
import classnames from "classnames";

const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={s.background}>
      <div className={s.menu__wrapper}>
        <div className={s.menu__bar}>
          <Logo classNames={s.logo} />
          <div className={s.menuIcon} onClick={toggleMenu}>
            {isMobileMenuOpen ? <CloseIcon /> : <BurgerMenu />}
          </div>
          <Navigation isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
    </div>
  );
};

type NavigationProps = {
  isMobileMenuOpen: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen }) => {
  const menuItems = () => {
    const items = [
      `Менюшки`,
      `Кнопки`,
      `Продуктовые карточки`,
      `футер`,
      "галерея",
      "поле ввода",
      "Логин",
      "Нотифай",
      "Параллакс",
      "Оценка",
      "Карточка профиля",
      "Реакт примеры",
      "Скролл",
      "сайдбар",
      "социконки",
    ];
    return items.map((i, index) => (
      <li key={index}>
        <a>{i}</a>
      </li>
    ));
  };

  return (
    <ul
      className={classnames(
        s.navigation,
        isMobileMenuOpen ? s.navigationMobile : "",
      )}
    >
      {menuItems()}
    </ul>
  );
};
export default Menu;
