import React from "react";
import Slider from "react-slick";

// Trik buat nge-bypass error 'got: object' di Vite 8 + React 19
// const Slider = (SliderComponent as any).default || SliderComponent;

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      {/* Panggil variabel Slider yang udah dibongkar tadi */}
      <Slider.default {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider.default>
    </div>
  );
}

export default SimpleSlider;
