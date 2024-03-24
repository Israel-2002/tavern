import React from "react";

const Input = ({
  type = "text",
  placeholder,
  icon,
  register,
  id,
  errors,
  required,
}) => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div
      className={`relative overflow-hidden rounded-md border bg-transparent ${errors[id] ? "border-rose-500" : "border-grey"}`}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute right-[0.9375rem] top-1/2 -translate-y-1/2"
        />
      )}
      <input
        {...register(id, {
          required,
          pattern: type === "email" && EMAIL_REGEX,
        })}
        className={`h-full w-full border-transparent bg-transparent px-5 py-[0.875rem] text-grey outline-none ${errors[id] ? "placeholder:text-rose-500" : "placeholder:text-grey"}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
