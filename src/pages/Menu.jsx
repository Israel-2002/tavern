import React from "react";
import Container from "../components/Container";
import menuImg from "../assets/images/menu-image.png";
import Button from "../components/Button";
import { RiArrowDownLine } from "react-icons/ri";
import MealsNavbar from "../components/MealsNavbar";
import useMenu from "../hooks/useMenu";
import LoadingSpinner from "../components/LoadingSpinner";
import MenuCard from "../components/MenuCard";
import LazyLoad from "../components/LazyLoad";

const Menu = () => {
  const { displayMeals, isLoading } = useMenu();

  return (
    <section>
      <Container>
        <div className="flex flex-col justify-between gap-[1.875rem] md:flex-row">
          <div className="max-w-lg">
            <h1 className="text-h1-clamp leading-normal">
              Want the best deals?
            </h1>
            <p className="mb-[1.875rem] text-grey md:mb-[2.375rem]">
              Tavern is simply the better choice when it comes to freshly made,
              convenient and affordable food.
            </p>
            <Button label="Scroll Down" icon={RiArrowDownLine} rightIcon/>
          </div>
          <div>
            <div className="aspect-square">
              <LazyLoad img={{ src: menuImg }} />
            </div>
          </div>
        </div>

        <div className="mt-[4.375rem] md:mt-[6.25rem]">
          <MealsNavbar />

          {isLoading ? (
            <LoadingSpinner loading={isLoading} />
          ) : (
            <ul className="grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2 md:grid-cols-3 lg:gap-[1.875rem]">
              {displayMeals.map((menu) => {
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
        </div>
      </Container>
    </section>
  );
};

export default Menu;
