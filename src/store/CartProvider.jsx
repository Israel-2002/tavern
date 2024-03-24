import React, { useEffect, useReducer } from "react";

export const cartCtx = React.createContext({
  cart: [],
  totalPrice: 0,
  pickup: "",
  addToCart: () => {},
  removeFromCart: () => {},
  setPickup: () => {},
});

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  cart: [],
  totalPrice: 0,
  pickup: "delivery",
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === action.item.id,
    );

    const exisitngItem = state.cart[existingItemIndex];

    let updatedTotalPrice;

    if (exisitngItem) {
      let updatedItem = state.cart.find(
        (cartItem) => cartItem.id === exisitngItem.id,
      );

      updatedItem = {
        ...updatedItem,
        amount: updatedItem.amount + action.item.amount,
      };

      let updatedItems = [...state.cart];
      updatedItems[existingItemIndex] = updatedItem;

      updatedTotalPrice = updatedItems.reduce((acc, cartItem) => {
        return acc + cartItem.price * cartItem.amount;
      }, 0);

      return {
        cart: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    } else {
      const items = [action.item, ...state.cart];

      updatedTotalPrice = items.reduce((acc, cartItem) => {
        return acc + cartItem.price * cartItem.amount;
      }, 0);

      return {
        ...state,
        cart: items,
        totalPrice: updatedTotalPrice,
      };
    }
  }

  if (action.type === "REMOVE_FROM_CART") {
    const existingItemIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === action.item.id,
    );

    const exisitngItem = state.cart[existingItemIndex];
    if (!exisitngItem) return;

    let updatedTotalPrice;

    if (exisitngItem.amount > 1 && action.item.oneByOne) {
      let updatedItem = state.cart.find(
        (cartItem) => cartItem.id === exisitngItem.id,
      );

      updatedItem = {
        ...updatedItem,
        amount: updatedItem.amount - 1,
      };

      let updatedItems = [...state.cart];
      updatedItems[existingItemIndex] = updatedItem;

      updatedTotalPrice = updatedItems.reduce((acc, cartItem) => {
        return acc + cartItem.price * cartItem.amount;
      }, 0);

      return {
        cart: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    } else {
      const updatedItems = state.cart.filter(
        (cartItem) => cartItem.id !== exisitngItem.id,
      );

      updatedTotalPrice = updatedItems.reduce((acc, cartItem) => {
        return acc + cartItem.price * cartItem.amount;
      }, 0);

      return {
        ...state,
        cart: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }
  }

  if (action.type === "PICKUP") {
    const selectedPickup = action.pickup;

    return {
      ...state,
      pickup: selectedPickup,
    };
  }

  return initialState;
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
  };

  const setPickup = (pickup) => {
    dispatch({ type: "PICKUP", pickup });
  };

  const values = {
    cart: cart.cart,
    totalPrice: cart.totalPrice,
    pickup: cart.pickup,
    addToCart,
    removeFromCart,
    setPickup,
  };

  return <cartCtx.Provider value={values}>{children}</cartCtx.Provider>;
};

export default CartProvider;
