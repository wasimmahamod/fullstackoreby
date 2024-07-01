import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";

const Product = ({ pimage, isNew, pInfo }) => {
  return (
    <div className="relative w-full sm:w-[330px] md:w-[320px] xl:w-[376px]">
      <div className="relative group">
        <Image
          className="h-[350px]  object-cover"
          src={pimage}
          alt="productimg"
        />
        <div className=" w-full h-[156px] bg-white/75 absolute bottom-0 left-0 hidden  group-hover:block ">
          <ul className=" text-right p-7 flex flex-col gap-4">
            <li className=" font-normal text-base text-secandary flex items-center gap-4 justify-end hover:font-bold hover:text-primary duration-300 ">
              Add to Wish List <FaHeart />
            </li>
            <li className=" font-normal text-base text-secandary flex items-center gap-4 justify-end hover:font-bold hover:text-primary duration-300 ">
              Compare <FaHeart />
            </li>
            <li className=" font-normal text-base text-secandary flex items-center gap-4 justify-end hover:font-bold hover:text-primary duration-300 ">
              Add to Cart <FaHeart />
            </li>
          </ul>
        </div>
      </div>
      <h4 className=" bg-primary font-sm font-bold  py-2 px-7 inline-block text-white absolute top-5 left-5">
        {pInfo ? pInfo.stock : "0 "}
      </h4>

      <Flex className=" justify-between mt-6">
        <h2 className=" text-xl font-bold text-primary ">
          {pInfo ? pInfo.title : "Basic Crew Neck Tee"}
        </h2>
        <h4 className=" text-base font-normal  text-secandary leading-[30px] ">
          ${pInfo ? pInfo.price : "0"}
        </h4>
      </Flex>
      <h5 className=" text-base font-normal  text-secandary leading-[30px] ">
        Black
      </h5>
    </div>
  );
};

export default Product;
