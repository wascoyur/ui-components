import React, {useState} from "react";
import './style.css'; // Импортируем стили
import {CloseIcon} from "./CloseIcon";
import {BurgerMenu} from "./BurgerMenu";
import {Logo} from "./Logo";

export const Menu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="background">
            <div className="menu__wrapper">
                <div className="menu__bar">
                    <Logo/>
                    <div
                        className="menu-icon"
                        onClick={toggleMenu}
                    >{isMobileMenuOpen?<CloseIcon/>:<BurgerMenu/>}</div>
                    <Navigation isMobileMenuOpen={isMobileMenuOpen}/>
                </div>
            </div>
        </div>
    );
};

type NavigationProps ={
    isMobileMenuOpen: boolean;

}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen }) => {

    const menuItems=()=>{
        const items=[`Менюшки`,`Кнопки`,`Продуктовые карточки`,`футер`,"галерея" ,"поле ввода" , "Логин","Нотифай","Параллакс","Оценка","Карточка профиля","Реакт примеры","Скролл","сайдбар", "социконки"]
        return items.map(i =>(<li><a>
            {i}
        </a></li>))
    }

    return (
        <ul className={`navigation ${isMobileMenuOpen ? 'navigation--mobile' : ''}`}>
            {menuItems()}

        </ul>
    );
};
