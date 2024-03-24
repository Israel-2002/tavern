import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
