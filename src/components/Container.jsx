import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1440px] px-[1.125rem] md:px-6 lg:px-10 xl:px-16">
      {children}
    </div>
  );
};

export default Container;
