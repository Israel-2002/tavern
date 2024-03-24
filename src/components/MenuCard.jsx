import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "./LazyLoad";

const MenuCard = ({ name, price, img, description }) => {
  const descriptionSubString = `${description.substring(0, 80)}...`;

  return (
    <Link
      to={`/menu/${name.replaceAll(" ", "")}`}
      className="group flex flex-col"
    >
      <div className="mb-3 aspect-video overflow-hidden rounded-lg lg:mb-5">
        <LazyLoad
          img={{
            src: img,
            width: "100%",
            height: "100%",
          }}
          className="h-full transition group-hover:scale-110"
        />
      </div>
      <span className="font-bold lg:text-xl">{name}</span>
      <p className="my-4 text-sm font-normal text-grey lg:text-base">
        {descriptionSubString}
      </p>
      <span className="mt-auto font-bold">${price.toFixed(2)}</span>
    </Link>
  );
};

export default MenuCard;
