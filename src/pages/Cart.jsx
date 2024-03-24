import React, { useContext } from "react";
import { cartCtx } from "../store/CartProvider";
import Container from "../components/Container";
import CartItem from "../components/cart/CartItem";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CartDetails from "../components/cart/CartDetails";

const Cart = () => {
  const cartContext = useContext(cartCtx);
  const navigate = useNavigate();

  const numberOfCartItems = cartContext.cart.reduce((acc, cartItem) => {
    return acc + cartItem.amount;
  }, 0);

  return (
    <section>
      <Container>
        <h6 className="mb-[1.875rem] mt-[1.875rem] text-xl font-bold sm:text-2xl md:mt-[2.875rem]">
          Your Cart ({numberOfCartItems})
        </h6>
        <div className="grid items-start gap-[1.125rem] lg:grid-cols-2 lg:gap-[1.875rem] xl:gap-[5.625rem]">
          <div>
            {numberOfCartItems ? (
              <ul className="h-[80vh] overflow-y-auto lg:h-auto lg:overflow-y-hidden">
                {cartContext.cart.map((cartItem) => {
                  return (
                    <CartItem
                      key={cartItem.id}
                      id={cartItem.id}
                      img={cartItem.img}
                      name={cartItem.name}
                      price={cartItem.price}
                      _amount={cartItem.amount}
                    />
                  );
                })}
              </ul>
            ) : (
              <>
                <p className="mb-4 text-grey lg:mb-6">
                  No items in cart, add items to view them here
                </p>
                <Button
                  label="Add Items"
                  className="w-full md:w-fit"
                  onClick={() => navigate("/menu")}
                />
              </>
            )}
          </div>
          <CartDetails />
        </div>
      </Container>
    </section>
  );
};

export default Cart;
