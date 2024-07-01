import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaAngleUp } from "react-icons/fa";
import ColorCategory from "./colorCategory";

const ShopbyColor = () => {
  let [shopbycolor, setShopbyColor] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShopbyColor(!shopbycolor)}
        className=" items-center w-full flex  justify-between font-bold text-xl text-primary  mb-[35px]  mt-[50px] "
      >
        Shop by Color
        <FaAngleUp />
      </button>

      {shopbycolor && (
        <div>
          <ColorCategory colorname="color 1 " colorcode="#A2231B" />
          <ColorCategory colorname="color 2 " colorcode="#1BC661" />
          <ColorCategory colorname="color 3 " colorcode="#1B83C6" />
        </div>
      )}
    </div>
  );
};

export default ShopbyColor;
