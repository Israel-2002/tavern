import React from "react";
import Container from "../Container";
import MealsNavbar from "../MealsNavbar";
import MenuCard from "../MenuCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Button";
import LoadingSpinner from "../LoadingSpinner";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const { displayMeals, isLoading } = useMenu();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParam = searchParams.get("category");

  const dynamicRoute = () => {
    if (currentSearchParam) {
      return `/menu/?category=${currentSearchParam}`;
    }

    return "/menu";
  };

  return (
    <section>
      <Container>
        <h4 className="text-center font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
          # our menu
        </h4>

        <h2 className="mx-auto mb-[1.875rem] max-w-xl text-center text-h2-clamp xl:mb-[4.375rem]">
          Find the delicious foods for you
        </h2>

        <MealsNavbar />

        {isLoading ? (
          <LoadingSpinner loading={isLoading} />
        ) : (
          <ul className="grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2 md:grid-cols-3 lg:gap-[1.875rem]">
            {displayMeals.slice(0, 6).map((menu) => {
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
        )}

        <Button
          label="Browse All"
          className="mt-[1.875rem] w-full md:mx-auto md:mt-[2.125rem] md:block md:w-fit lg:mt-[3.4375rem]"
          onClick={() => navigate(dynamicRoute())}
        />
      </Container>
    </section>
  );
};

export default Menu;
