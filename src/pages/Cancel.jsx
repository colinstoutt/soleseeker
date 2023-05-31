import React, { useEffect, useContext } from "react";
import { CartContext } from "../cartContext";
import { Link } from "react-router-dom";

export const Cancel = () => {
  const cart = useContext(CartContext);

  useEffect(() => {
    cart.resetCart();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mt-16 text-2xl font-light sm:text-center">
        Purchase Cancelled
      </h1>

      <br />
      <div className="sm:flex justify-center">
        <Link
          to="/"
          className="inline-block text-lg px-6 py-2 bg-black text-white mb-52"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};
