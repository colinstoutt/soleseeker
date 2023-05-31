import { useContext } from "react";
import { CartContext } from "../cartContext";

import { CartShoe } from "../components/CartShoe";

export default function Bag() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="sm:w-5/6 sm:m-auto">
      <div className="px-6 sm:mb-20 sm:flex justify-center">
        <div>
          <h1 className="text-2xl font-light mt-16 py-6">My Bag</h1>

          {cart.items.length === 0 ? (
            <h1 className="font-light">Bag is empty.</h1>
          ) : (
            <div className="sm:flex gap-6">
              {" "}
              <div>
                {cart.items.map((shoe, index) => {
                  return (
                    <CartShoe
                      id={shoe.id}
                      quantity={shoe.quantity}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="border border-gray-300 p-4 mb-10 h-[11rem] sm:w-72">
                <h1 className="text-light text-lg mb-1">Bag Summary</h1>
                <h2>{productsCount} Items</h2>
                <h1 className="text-2xl font-light mb-2">
                  <span>Total: </span>${cart.getTotalCost().toFixed(2)}
                </h1>
                <div>
                  <button className="text-white bg-black sm:w-auto w-full px-6 py-2 border border-gray-300">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
