import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const SubCategory = ({ subShow }) => {
  return (
    <div>
      {subShow && (
        <List>
          <ListItem className=" ml-5 py-[19px] border-b border-[#F0F0F0] flex  items-center justify-between text-base font-normal  leading-[30px] text-secandary ">
            Sub Category One
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default SubCategory;
