import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartCtx } from "../../store/CartProvider";

const menuItems = [
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Menu",
    route: "/menu",
  },
  {
    label: "Contact",
    route: "/contact",
  },
  {
    label: "Cart",
    route: "/cart",
  },
];

const MenuItems = ({ onClick }) => {
  const cartContext = useContext(cartCtx);

  const numberOfCartItems = cartContext.cart.reduce((acc, cartItem) => {
    return acc + cartItem.amount;
  }, 0);

  return (
    <ul className="flex flex-col gap-4 text-lg text-grey md:gap-5  md:text-base lg:flex-row lg:gap-[1.875rem]">
      {menuItems.map((item) => (
        <Link key={item.label} to={item.route} onClick={onClick}>
          <li>
            {item.label}
            {item.label === "Cart" && <span>({numberOfCartItems})</span>}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuItems;
