import css from "./Scheme.module.css";

const Scheme = () => {
  return (
    <div className={css.scheme_container}>
      <h2>Схема работы</h2>
      <div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <p>Оставляете нам заявку на сайте или звоните</p>
          </li>
          <li className={css.listItem}>
            <p>Наш специалист выезжает к вам на замер</p>
          </li>
          <li className={css.listItem}>
            <p>Мы составляем смету, учитывая все ваши пожелания</p>
          </li>
          <li className={css.listItem}>
            <p>Согласовываем сроки, стоимость и заключаем договор</p>
          </li>
          <li className={css.listItem}>
            <p>Приступаем к работе</p>
          </li>
          <li className={css.listItem}>
            <p>По завершении работы - ее прием и оплата</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scheme;
