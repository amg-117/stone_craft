import css from "./Principles.module.css";
import Principles_photo from "./Principles.png";

const Principles = () => {
  return (
    <div className={css.principles_container}>
      <h2>Принципы нашей работы</h2>
      <div className={css.principles}>
        <img src={Principles_photo} alt="Principles_photo"></img>
        <div className={css.principles_articles}>
          <div className={css.principles_unit}>
            <small>01</small>
            <p>Использование только качественного материала и фурнитуры</p>
          </div>
          <div className={css.principles_unit}>
            <small>02</small>
            <p>Клиентоориентированность и мобильность</p>
          </div>
          <div className={css.principles_unit}>
            <small>03</small>
            <p>Жесткий контроль качества и доставки продукции</p>
          </div>
          <div className={css.principles_unit}>
            <small>04</small>
            <p>Мгновенное реагирование на требование заказчиков</p>
          </div>
          <div className={css.principles_unit}>
            <small>05</small>
            <p>Многопрофильное производство по принципу “все включено”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
