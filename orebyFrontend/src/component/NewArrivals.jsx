import React from "react";
import Container from "./Container";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!w-[64px] lg:!h-[64px]`}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "0%",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaArrowRightLong className=" text-lg text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!w-[64px] lg:!h-[64px]`}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0%",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaArrowLeftLong className=" text-lg text-white" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-[123px] mb-[100px] ">
      <Container>
        <Title className="mb-12" headding="New Arrivals" />
        <Slider {...settings}>
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={true} />
          <Product pimage="images/productimg.png" isNew={true} />
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;
