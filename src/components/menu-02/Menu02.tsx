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
    return (
        <ul className={`navigation ${isMobileMenuOpen ? 'navigation--mobile' : ''}`}>
            <li>
                <a href="#services" title="Services">
                    Services
                </a>
            </li>
            <li>
                <a href="#blog" title="Blog">
                    Blog
                </a>
            </li>
            <li>
                <a href="#about" title="About">
                    About
                </a>
            </li>
            <li>
                <a href="#contact-us" title="Contact Us">
                    Contact Us
                </a>
            </li>
        </ul>
    );
};
