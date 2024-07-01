import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaPlus } from "react-icons/fa6";
import SubCategory from "./SubCategory";

const Category = ({ categoryName, subcategoryShow }) => {
  let [subcategory, setSubCategory] = useState(false);
  return (
    <List>
      <ListItem className=" py-[19px] border-b border-[#F0F0F0] relative    text-base font-normal  leading-[30px] text-secandary ">
        {categoryName}
        {subcategoryShow && (
          <FaPlus
            onClick={() => setSubCategory(!subcategory)}
            className=" absolute top-7 right-0 "
          />
        )}
      </ListItem>
      {subcategoryShow && <SubCategory subShow={subcategory} />}
    </List>
  );
};

export default Category;
