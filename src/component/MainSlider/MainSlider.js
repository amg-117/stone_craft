import "./MainSlider.css";
import "./MainSliderArrows.css";
import React from "react";
import Slider from "react-slick";
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";
import slide3 from "./slide3.png";

const MainSlider = () => {
  const settings = {
    dots: true, // индикаторы
    infinite: true, // бесконечная прокрутка
    speed: 1000, // скорость анимации
    slidesToShow: 1, // количество видимых слайдов
    slidesToScroll: 1, // количество слайдов за прокрутку
    autoplay: true, // Автоматическая прокрутка
    autoplaySpeed: 2000, // Время между прокрутками (в миллисекундах)
    arrows: true,
  };

  return (
    <section className="MainSlider">
      <div className="MainSlider_container">
        <Slider {...settings}>
          <div className="slide">
            <img src={slide1} alt="slide1" />
            <div className="slide_card">
              <div className="slide_card_container">
                <h1>
                  Домашний камень
                  <br />
                  индивидуального
                  <br />
                  исполнения
                </h1>
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={slide2} alt="slide2" />
            <div className="slide_card">
              <div className="slide_card_container">
                <h1>
                  Домашний камень
                  <br />
                  индивидуального
                  <br />
                  исполнения
                </h1>
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={slide3} alt="slide3" />
            <div className="slide_card">
              <div className="slide_card_container">
                <h1>
                  Домашний камень
                  <br />
                  индивидуального
                  <br />
                  исполнения
                </h1>
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MainSlider;
