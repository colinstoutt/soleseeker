import React from "react";
import { getShoeData } from "../data/shoes";
import { useContext } from "react";
import { CartContext } from "../cartContext";

export const CartShoe = ({ id, quantity }) => {
  const shoeData = getShoeData(id);
  const cart = useContext(CartContext);

  return (
    <>
      <div className="flex items-center gap-10 mb-10">
        <img
          src={shoeData.images[0]}
          alt={shoeData.name}
          className="w-48 h-auto"
        />
        <div className="font-light">
          <h1 className="mb-1">{shoeData.name}</h1>
          <h1>${shoeData.price}</h1>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-b border-gray-300 py-4 mb-16">
        <div className="flex relative">
          <button
            onClick={quantity > 1 ? () => cart.removeOneFromCart(id) : null}
            className="text-black px-4 mr-1 text-black border-gray-300 border"
          >
            -
          </button>
          <p className="mx-2">Qty: {quantity}</p>

          <button
            onClick={() => cart.addOneToCart(id)}
            className="text-black px-4 border-gray-300 border"
          >
            +
          </button>
          <button
            onClick={() => cart.deleteFromCart(id)}
            className="absolute left-0 top-11 text-red-500 font-light text-sm cursor-pointer underline"
          >
            Remove from bag
          </button>
        </div>
        <span className="font-light">${shoeData.price * quantity}</span>
      </div>
    </>
  );
};
