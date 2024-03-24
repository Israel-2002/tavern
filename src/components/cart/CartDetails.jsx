import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { cartCtx } from "../../store/CartProvider";

const CartDetails = () => {
  const [delivery, setDelivery] = useState(null);
  const cartContext = useContext(cartCtx);

  const calculateTax = () => {
    const taxRate = 0.1;
    const subtotal = cartContext.totalPrice;

    const taxAmount = taxRate * subtotal;

    return taxAmount;
  };

  useEffect(() => {
    if (cartContext.pickup === "delivery") {
      setDelivery(3.0);
    } else {
      setDelivery(0.0);
    }

    if (cartContext.cart.length === 0) {
      setDelivery(0.0);
    }
  }, [cartContext.pickup, cartContext.cart.length]);

  const total = cartContext.totalPrice + calculateTax() + delivery;

  return (
    <div className="rounded-lg bg-white px-3 py-[1.375rem] md:px-[1.875rem]">
      <h6 className="text-lg font-bold sm:text-xl">Order Summary</h6>

      <div className="my-[1.875rem] border-y py-4">
        <div className="mb-4 flex items-center justify-between text-grey">
          <span>Subtotal</span>
          <span>${cartContext.totalPrice.toFixed(2)}</span>
        </div>

        <div className="mb-4 flex items-center justify-between text-grey">
          <span>Vat/Tax</span>
          <span>${calculateTax().toFixed(2)}</span>
        </div>

        <div className="mb-4 flex items-center justify-between text-grey">
          <span>Delivery</span>
          <span>${delivery?.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-grey">
          <span>Discount</span>
          <span>$0.00</span>
        </div>
      </div>

      <div className="mb-[1.875rem] flex items-center justify-between font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="text-center">
        <Button label="Proceed to checkout" className="w-full max-w-xl" />
      </div>
    </div>
  );
};

export default CartDetails;
