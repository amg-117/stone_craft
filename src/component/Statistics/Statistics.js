import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.stat_container}>
      <h2>Home-Rock в цифрах</h2>
      <div className={css.stat_units}>
        <div className={css.stat_unit}>
          <h4>6</h4>
          <p>производственных направлений</p>
        </div>
        <div className={css.stat_unit}>
          <h4>10</h4>
          <p>лет на рынке</p>
        </div>
        <div className={css.stat_unit}>
          <h4>1500</h4>
          <p>значимых объектов</p>
        </div>
        <div className={css.stat_unit}>
          <h4>
            6000<span>м²</span>
          </h4>
          <p>производственной площади</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
