import css from "./Brands.module.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";
import img10 from "./10.png";
import Geogrphy from "./Geogrphy.png";

const Brands = () => {
  return (
    <section className={css.brands_container}>
      <h2>С нами работают</h2>
      <div className={css.brands_images}>
        <img src={img1} alt="img1"></img>
        <img src={img2} alt="img2"></img>
        <img src={img3} alt="img3"></img>
        <img src={img4} alt="img4"></img>
        <img src={img5} alt="img5"></img>
        <img src={img6} alt="img6"></img>
        <img src={img7} alt="img7"></img>
        <img src={img8} alt="img8"></img>
        <img src={img9} alt="img9"></img>
        <img src={img10} alt="img10"></img>
      </div>
      <h2>География наших проектов</h2>
      <img className={css.brands_geogrphy} src={Geogrphy} alt="Geogrphy"></img>
    </section>
  );
};

export default Brands;
