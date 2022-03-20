import React from "react";
import "./ImgSlider.css";
import Slider from "infinite-react-carousel";
import slider1 from "../../images/slider1.webp";
import slider2 from "../../images/slider2.webp";
import slider3 from "../../images/slider3.webp";
import slider4 from "../../images/slider4.webp";
import slider5 from "../../images/slider5.webp";

function ImgSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    slidesToShow: 2,
    pauseOnHover: false,
    swipe: false,
  };

  return (
    <section className="slider">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="Slide" />
        </div>
        <div>
          <img src={slider2} alt="Slide" />
        </div>
        <div>
          <img src={slider3} alt="Slide" />
        </div>
        <div>
          <img src={slider4} alt="Slide" />
        </div>
        <div>
          <img src={slider5} alt="Slide" />
        </div>
      </Slider>
    </section>
  );
}

export default ImgSlider;
