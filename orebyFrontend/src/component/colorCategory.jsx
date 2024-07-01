import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const ColorCategory = ({ colorcode }) => {
  return (
    <List>
      <div className=" flex gap-3   items-center py-[19px] border-b border-[#F0F0F0]">
        <div
          style={{ background: `${colorcode}` }}
          className={`w-[11px]  h-[11px]  rounded-full`}
        ></div>
        <ListItem className="  relative    text-base font-normal  leading-[30px] text-secandary ">
          Color 1
        </ListItem>
      </div>
    </List>
  );
};

export default ColorCategory;
