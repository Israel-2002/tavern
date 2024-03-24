import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import menus from "../data";
import Container from "../components/Container";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import Button from "../components/Button";
import LazyLoad from "../components/LazyLoad";
import Similar from "../components/Similar";
import { cartCtx } from "../store/CartProvider";
import toast from "react-hot-toast";

const MenuDetails = () => {
  const [amount, setAmount] = useState(1);
  const cartContext = useContext(cartCtx);
  const [pickup, setPickup] = useState(cartContext.pickup);

  const params = useParams();
  const pathname = useLocation();

  const menu = menus.find(
    (menu) => menu.name.replaceAll(" ", "") === params.id,
  );

  const increaseAmount = () => setAmount((prev) => prev + 1);

  const decreaseAmount = () => {
    if (amount === 1) return;

    setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    setAmount(1);
  }, [pathname]);

  const addToCartHandler = () => {
    cartContext.addToCart({
      id: menu.id,
      amount,
      name: menu.name,
      img: menu.img,
      price: menu.price,
    });

    cartContext.setPickup(pickup);
    toast.success("Added");
  };

  const changePickupHandler = (value) => {
    setPickup(value);
  };

  return (
    <>
      <section>
        <Container>
          <div className="grid gap-[1.125rem] pt-8 lg:grid-cols-2 lg:gap-[1.875rem]">
            <div className="aspect-video">
              <LazyLoad
                img={{
                  src: menu.img,
                }}
                className="h-full w-full rounded-lg"
              />
            </div>

            <div>
              <div className="grid gap-3 lg:gap-[1.125rem]">
                <h4 className="max-w-lg text-2xl lg:text-[2.5rem] lg:leading-normal">
                  {menu.name}
                </h4>
                <p className="capitalize text-grey">
                  <span className="font-semibold text-dark">Category:</span>{" "}
                  {menu.category}
                </p>

                <div className="capitalize text-grey">
                  <span className="font-semibold text-dark">Ingredients:</span>{" "}
                  {menu.ingredients?.map((ingredient, i) => (
                    <span key={i}>
                      <span>
                        {ingredient}
                        {menu.ingredients.length - 1 === i ? "." : ","}
                      </span>{" "}
                    </span>
                  ))}
                </div>

                <span className="font-semibold">{menu.cal}</span>

                <h3 className="text-2xl">${menu.price.toFixed(2)}</h3>
                <p className="max-w-5xl text-grey">{menu.description}</p>
              </div>
              <div className="mt-[1.875rem] flex max-w-sm flex-col gap-3 md:mt-[1.125rem] lg:flex-row">
                <div className="flex w-full items-center justify-between rounded-full border p-2  md:gap-[2.1875rem] lg:w-fit">
                  <RiSubtractLine
                    size={24}
                    className={`text-grey/60 hover:opacity-80 ${amount !== 1 ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={decreaseAmount}
                  />
                  <span>{amount}</span>
                  <RiAddLine
                    size={24}
                    className="cursor-pointer text-grey/60 hover:opacity-80"
                    onClick={increaseAmount}
                  />
                </div>
                <Button
                  small
                  label="Add to Cart"
                  className="w-full md:block lg:w-fit"
                  onClick={addToCartHandler}
                />
              </div>

              <div className="mt-5">
                <div className="mb-3 flex items-center gap-2">
                  <input
                    type="radio"
                    id="pickup"
                    value="pickup"
                    checked={pickup === "pickup"}
                    onChange={() => changePickupHandler("pickup")}
                  />
                  <label htmlFor="pickup" className="font-medium">
                    Store Pickup
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="delivery"
                    value="delivery"
                    checked={pickup === "delivery"}
                    onChange={() => changePickupHandler("delivery")}
                  />
                  <label htmlFor="delivery" className="font-medium">
                    Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>

          <Similar
            similar={menus
              .filter((m) => m.category === menu.category)
              .filter((m) => m.name !== menu.name)}
          />
        </Container>
      </section>
    </>
  );
};

export default MenuDetails;
