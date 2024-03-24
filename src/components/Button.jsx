import React from "react";

const Button = ({
  type,
  label,
  transparent,
  dark,
  className,
  small,
  onClick,
  icon: Icon,
  rightIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Icon && "flex"} ${!rightIcon && "flex-row-reverse"} justify max-w-md cursor-pointer items-center justify-center gap-2 rounded-full px-[2.1875rem] font-medium transition  hover:opacity-90 ${className} ${small ? "py-2" : "py-[0.9375rem]"} ${
        transparent && "bg-transparent"
      } ${transparent ? "text-dark" : "text-white"} ${
        dark ? "bg-dark" : "bg-primary"
      } ${transparent && Icon && "border"} ${transparent && Icon && "border-grey"}`}
    >
      {label} {Icon && <Icon size={22} />}
    </button>
  );
};

export default Button;
