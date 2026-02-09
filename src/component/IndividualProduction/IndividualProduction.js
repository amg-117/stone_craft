import css from "./IndividualProduction.module.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";

const IndividualProduction = () => {
  return (
    <div className={css.IndProd_container}>
      <div className={css.IndProd_title}>
        <h2>Изготовление мебели по индивидуальному исполнению</h2>
        <div className={css.IndProd_title_comments}>
          <div></div>
          <p>
            Мебельная фабрика Техно-Вуд с 2010 года занимается оснащением
            учреждений образования, здравоохранения и силовых ведомств
            качественной и современной мебелью.
          </p>
          <p>
            Важным конкурентным преимуществом нашей фабрики является наличие
            разных направлений в производстве мебели.
          </p>
        </div>
      </div>
      <div className={css.img_border}>
        <div className={css.img_container}>
          <div className={css.block_img}>
            <div className={`${css.img_box} ${css.box1}`}>
              <img src={img1} alt="img1"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Гос. контракты</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box2}`}>
              <img src={img2} alt="img2"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Входная группа и хранение</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box3}`}>
              <img src={img3} alt="img3"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Кухонная зона</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box4}`}>
              <img src={img4} alt="img4"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Мягкая мебель</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box5}`}>
              <img src={img5} alt="img5"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Офисная мебель</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box6}`}>
              <img src={img6} alt="img6"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Мебель для гостинной</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box7}`}>
              <img src={img7} alt="img7"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Детские комнаты</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box8}`}>
              <img src={img8} alt="img8"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Медицинская мебель</h6>
                <p>Подробнее</p>
              </a>
            </div>
            <div className={`${css.img_box} ${css.box9}`}>
              <img src={img9} alt="img9"></img>
              <a className={css.img_btn} href="index.html">
                <h6>Торгово-выставочное оборудование</h6>
                <p>Подробнее</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduction;
