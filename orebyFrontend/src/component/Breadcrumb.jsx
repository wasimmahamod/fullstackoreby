import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

const Breadcrumb = ({ title }) => {
  return (
    <div className=" mt-[50px] lg:mt-[124px]">
      <h3 className="text-[30px]  lg:text-[49px] font-bold  text-primary  capitalize">
        {title}
      </h3>
      <ul className=" flex items-center gap-2 ">
        <li className="  text-sm font-normal  text-secandary">Home</li>
        <li className="  text-sm font-normal  text-secandary">
          <TfiAngleRight />
        </li>
        <li className="  text-sm font-normal  text-secandary"> {title}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
