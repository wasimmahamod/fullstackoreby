import React, { useState } from "react";
import Image from "./Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

const Banner = () => {
  let [active, setActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // speed: 500,
    // speed: 2000,
    // autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "3px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "3%",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? {
                      width: "20px",
                      color: "#262626",
                      padding: "5px 0",
                      borderRight: "2px #262626 solid",
                      fontSize: "10px",
                      fontWeight: "500",
                    }
                  : {
                      width: "20px",
                      color: "#262626",
                      padding: "5px 0",
                      fontSize: "0px",
                      borderRight: "2px #FFFFFF solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "9%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        // style={{
        //   width: "30px",
        //   color: "white",
        //   padding: "10px 0",
        //   borderRight: "2px white solid",
        // }}
        style={
          i === active
            ? {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                borderRight: "2px #262626 solid",
                fontSize: "16px",
                fontWeight: "500",
              }
            : {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                fontSize: "0px",
                borderRight: "2px #FFFFFF solid",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <Image
          className="w-full"
          src="images/bannerimage.png"
          alt="bannerImage"
        />

        <Image
          className="w-full"
          src="images/bannerimage.png"
          alt="bannerImage"
        />

        <Image
          className="w-full"
          src="images/bannerimage.png"
          alt="bannerImage"
        />
      </Slider>
    </div>
  );
};

export default Banner;
