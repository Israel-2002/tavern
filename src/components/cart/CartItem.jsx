import React, { useContext, useState } from "react";
import LazyLoad from "../LazyLoad";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { cartCtx } from "../../store/CartProvider";

const CartItem = ({ id, img, name, price, _amount }) => {
  const [amount, setAmount] = useState(_amount);

  const cartContext = useContext(cartCtx);

  const increaseAmount = () => setAmount((prev) => prev + 1);

  const decreaseAmount = () => {
    if (amount === 1) return;

    setAmount((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    cartContext.addToCart({
      id,
      amount: 1,
      name,
      img,
      price,
    });
    cartContext.setPickup(cartContext.pickup);
  };

  return (
    <li
      key={id}
      className="flex flex-col justify-between gap-3 border-b pb-[1.875rem] pt-[1.875rem] first:border-t 520:flex-row"
    >
      <div className="grid gap-3 520:grid-cols-2 md:gap-[1.125rem]">
        <div className="aspect-video">
          <LazyLoad
            img={{
              src: img,
            }}
            className="h-full w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col font-bold md:text-xl">
          <h6 className="mb-0.5 520:mb-2">{name}</h6>
          <span className="mb-3">${price.toFixed(2)}</span>
          <span
            className="mt-auto w-fit cursor-pointer border-b border-b-grey font-normal text-grey hover:opacity-80 md:text-sm"
            onClick={() => cartContext.removeFromCart({ id, oneByOne: false })}
          >
            Remove
          </span>
        </div>
      </div>

      <div className="flex w-full max-w-sm items-center justify-between rounded-full border p-2 520:w-fit 520:flex-col md:gap-[2.1875rem] lg:w-fit">
        <RiSubtractLine
          size={24}
          className="cursor-pointer text-grey/60 hover:opacity-80"
          onClick={() => {
            decreaseAmount();
            cartContext.removeFromCart({ id, oneByOne: true });
          }}
        />
        <span>{amount}</span>
        <RiAddLine
          size={24}
          className="cursor-pointer text-grey/60 hover:opacity-80"
          onClick={() => {
            increaseAmount();
            addToCartHandler();
          }}
        />
      </div>
    </li>
  );
};

export default CartItem;
