import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCpns = () => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader_2, setSliderHeader_2] = useState([]);

  useEffect(() => {
    fetchsliderHeader();
    fetchsliderHeader_2();
  }, []);

  const fetchsliderHeader = () => {
    fetch("https://api.edulink-indonesia.com/sliderheadercpns")
      .then((res) => res.json())
      .then((data) => {
        setSliderHeader(data);
      });
  };

  const fetchsliderHeader_2 = () => {
    fetch("https://api.edulink-indonesia.com/sliderheadercpns")
      .then((res) => res.json())
      .then((data) => {
        setSliderHeader_2(data);
      });
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "button-slider",
  };

  return (
    <React.Fragment>
      <div className="slider-top" style={{ background: "" }}>
        <Slider {...settings}>
          {sliderHeader.map((item, index) => {
            return (
              <div className="top-slider">
                <div className="slider" key={index}>
                  <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
                    <img
                      src={
                        "https://api.edulink-indonesia.com/images/" + item.image
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="slider-top-2" style={{ background: "" }}>
        <Slider {...settings}>
          {sliderHeader_2.map((item, index) => {
            return (
              <div className="top-slider">
                <div className="slider" key={index}>
                  <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
                    <img
                      src={
                        "https://api.edulink-indonesia.com/images/" + item.image
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default SliderCpns;
