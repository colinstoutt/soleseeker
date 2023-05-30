import { useContext } from "react";
import { CartContext } from "../cartContext";

import { CartShoe } from "../components/CartShoe";

export default function Bag() {
  const cart = useContext(CartContext);

  return (
    <div className="mt-16 px-6">
      <h1 className="pt-4 text-2xl font-thin sm:p-0 sm:p-4 pb-4 mb-6">
        My Bag
      </h1>
      {cart.items.length === 0 ? (
        <h1 className="font-light">Bag is empty.</h1>
      ) : (
        <>
          {" "}
          {cart.items.map((shoe, index) => {
            return (
              <CartShoe id={shoe.id} quantity={shoe.quantity} key={index} />
            );
          })}
          <h1 className="text-2xl font-light mb-4 sm:text-right text-center">
            <span>Total: </span>${cart.getTotalCost().toFixed(2)}
          </h1>
          <div className="sm:flex sm:justify-end">
            <button className="sm:w-auto w-full px-6 py-2 border border-gray-300 mb-20 text-center sm:inline sm:text-right">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
