import React from "react";

const Title = ({ headding, className }) => {
  return (
    <h2 className={`text-[39px]  font-bold text-primary ${className}`}>
      {headding}
    </h2>
  );
};

export default Title;
