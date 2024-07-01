import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import SubCategory from "./SubCategory";
import Category from "./Category";

const ShopbyCategory = () => {
  let [subcategoryShow, setSubCategroyShow] = useState(false);
  return (
    <div>
      <h2 className=" font-bold text-xl text-primary  mb-[35px] ">
        Shop by Category
      </h2>
      <Category categoryName="Category 1 " subcategoryShow={true} />

      <Category categoryName="Category 2 " subcategoryShow={false} />
      <Category categoryName="Category 3 " subcategoryShow={true} />
      <Category categoryName="Category 4 " subcategoryShow={false} />
    </div>
  );
};

export default ShopbyCategory;
