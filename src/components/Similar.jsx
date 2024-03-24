import React from "react";
import MenuCard from "../components/MenuCard";

const Similar = ({ similar }) => {
  return (
    <div>
      <h2 className="mb-[1.875rem] mt-[2.1875rem] text-center text-[1.875rem] md:mt-[3.125rem] md:text-[2.1875rem] lg:mt-[4.375rem] lg:text-[2.5rem] xl:mb-[4.375rem]">
        Similar Meals
      </h2>

      <ul className="grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2 md:grid-cols-3 lg:gap-[1.875rem]">
        {similar.slice(0, 3).map((menu) => {
          return (
            <MenuCard
              key={menu.id}
              name={menu.name}
              price={menu.price}
              description={menu.description}
              img={menu.img}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Similar;
