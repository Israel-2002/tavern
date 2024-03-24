import React from "react";

const SvgIcon = ({ img, alt, className }) => {
  return (
    <img
      src={img}
      alt={alt}
      className={`inline-block h-[30px] w-[70px] md:h-[50px] md:w-[90px] lg:h-[80px] lg:w-[120px] ${className}`}
    />
  );
};

export default SvgIcon;
