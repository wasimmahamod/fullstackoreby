import React from "react";

const ListItem = ({ children, className, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      {children}
    </li>
  );
};

export default ListItem;
