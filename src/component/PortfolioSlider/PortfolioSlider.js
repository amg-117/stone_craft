import React from "react";
import "./PortfolioSlider.css";
import "./PortfolioSliderArrows.css";
import Slider from "react-slick";
import img11 from "./11.png";
import img12 from "./12.png";
import img13 from "./13.png";
import img14 from "./14.png";
import img21 from "./21.png";
import img22 from "./22.png";
import img23 from "./23.png";
import img24 from "./24.png";
import img31 from "./31.png";
import img32 from "./32.png";
import img33 from "./33.png";
import img34 from "./34.png";

const PortfolioSlider = () => {
  const settings = {
    dots: true, // индикаторы
    infinite: true, // бесконечная прокрутка
    speed: 1000, // скорость анимации
    slidesToShow: 1, // количество видимых слайдов
    slidesToScroll: 1, // количество слайдов за прокрутку
    autoplay: false, // Автоматическая прокрутка
    autoplaySpeed: 2000, // Время между прокрутками (в миллисекундах)
    arrows: true,
  };

  return (
    <section className="PortfolioSlider_container">
      <h2>Наше портфолио</h2>
      <div className="slider_border">
        <div className="PortfolioSlider_container">
          <Slider {...settings} className="slider">
            <div>
              <div className="slide">
                <img className="img_area1" src={img11} alt="img11" />
                <img className="img_area2" src={img12} alt="img12" />
                <img className="img_area3" src={img13} alt="img13" />
                <img className="img_area4" src={img14} alt="img14" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img_area1" src={img21} alt="img21" />
                <img className="img_area2" src={img22} alt="img22" />
                <img className="img_area3" src={img23} alt="img23" />
                <img className="img_area4" src={img24} alt="img24" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img_area1" src={img31} alt="img31" />
                <img className="img_area2" src={img32} alt="img32" />
                <img className="img_area3" src={img33} alt="img33" />
                <img className="img_area4" src={img34} alt="img34" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;
