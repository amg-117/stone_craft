import Logo_img from "./Logo.svg";
import phone from "./phone.svg";
import css from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={css.container}>
        <Link to="/" className={css.logo}>
          <img className={css.logo_img} src={Logo_img} alt="Logo_img"></img>
          <div className={css.logo_txt}>
            <h1>HOME-ROCK</h1>
            <h2>домашний камень</h2>
          </div>
        </Link>
        {isMobile && <BurgerMenu />}
        <nav className={css.nav}>
          <Link to="/" className={css.nav_link} href="index.html">
            РАБОТЫ
          </Link>
          <Link to="/" className={css.nav_link} href="index.html">
            ОБЪЕКТЫ
          </Link>
          <Link to="/catalog" className={css.nav_link} href="index.html">
            МАТЕРИАЛЫ
          </Link>
          <Link to="/" className={css.nav_link} href="index.html">
            О КОМПАНИИ
          </Link>
          <Link to="/" className={css.nav_link} href="index.html">
            КОНТАКТЫ
          </Link>
        </nav>
        <div className={css.phones}>
          <Link to="/" className={css.phones_tel} href="tel:+78002226505">
            <img src={phone} alt="phone"></img>
            <p>8 (800) 222-65-05</p>
          </Link>
          <Link to="/" className={css.phones_callback} href="index.html">
            ОБРАТНЫЙ ЗВОНОК
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
