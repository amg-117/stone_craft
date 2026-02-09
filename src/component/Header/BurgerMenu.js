import css from "./BurgerMenu.module.css";
import phone from "./phone.svg";
import Logo_img from "./Logo.svg";
import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.burgerMenu}>
      {/* Слой затемнения */}
      {isOpen && <div className={css.overlay} onClick={closeMenu}></div>}

      {/* Иконка бургер-меню */}
      <div
        className={`${css.burgerIcon} ${isOpen ? css.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={css.line}></span>
        <span className={css.line}></span>
        <span className={css.line}></span>
      </div>

      {/* Навигационное меню */}
      <nav className={`${css.nav} ${isOpen ? css.open : ""}`}>
        <a className={css.logo} href="index.html">
          <img className={css.logo_img} src={Logo_img} alt="Logo_img"></img>
          <div className={css.logo_txt}>
            <h1>HOME-ROCK</h1>
            <h2>домашний камень</h2>
          </div>
        </a>
        <a href="/">РАБОТЫ</a>
        <a href="/about">ОБЪЕКТЫ</a>
        <a href="/services">МАТЕРИАЛЫ</a>
        <a href="/services">О КОМАНИИ</a>
        <a href="/services">КОНТАКТЫ</a>
        <a className={css.phones_tel} href="tel:+78002226505">
          <img src={phone} alt="phone"></img>
          <p>8 (800) 222-65-05</p>
        </a>
        <a className={css.phones_callback} href="index.html">
          ОБРАТНЫЙ ЗВОНОК
        </a>
      </nav>
    </div>
  );
};

export default BurgerMenu;
