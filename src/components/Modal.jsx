import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getShoeData, shoesArray } from "../data/shoes";
import { CartContext } from "../cartContext";
import CloseIcon from "@mui/icons-material/Close";
import { ModalItem } from "./ModalItem";

export const CartModal = ({ setToggleModal }) => {
  const cart = useContext(CartContext);
  const { id } = useParams();
  const shoe = getShoeData(id);
  console.log(cart.items);

  return (
    <div className="z-40 fixed lg:pt-32 lg:right-0 bottom-0 lg:h-full h-1/2 bg-white lg:w-1/4 w-full shadow-2xl p-6">
      <div className="flex items-center gap-2">
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1>Item added to cart</h1>
        <CloseIcon
          sx={{ fontSize: "1.9rem" }}
          className="absolute right-3 md:hidden cursor-pointer"
          onClick={() => {
            setToggleModal(false);
          }}
        />
      </div>
      <div>
        <ModalItem shoe={shoe} />
      </div>
      <div className="lg:block mb-3 flex justify-between items-center">
        <h1 className="lg:mb-0 ">Bag Subtotal:</h1>
        <h4 className="lg:mb-6">${cart.getTotalCost().toLocaleString()}</h4>
      </div>
      <button
        onClick={() => {
          setToggleModal(false);
        }}
        className="mr-2 border border-gray-300 px-8 py-3 text-sm lg:mb-2"
      >
        KEEP SHOPPING
      </button>
      <button className="mb-6 mr-2 bg-black text-white border border-gray-300 px-8 py-3 text-sm">
        {`VIEW BAG (${cart.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        )})`}
      </button>
      <h1 className="text-md font-semibold">You may also like:</h1>
    </div>
  );
};
