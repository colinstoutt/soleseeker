import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getShoeData, shoesArray } from "../data/shoes";
import { CartContext } from "../cartContext";
import CloseIcon from "@mui/icons-material/Close";
import { ModalItem } from "./ModalItem";
import { Link } from "react-router-dom";

export const CartModal = ({ setToggleModal }) => {
  const cart = useContext(CartContext);
  const { id } = useParams();
  const shoe = getShoeData(id);
  console.log(shoe);

  return (
    <div className="rounded-tl-2xl  rounded-tr-2xl z-40 fixed lg:pt-20 lg:right-0 bottom-0 lg:h-full bg-white lg:w-1/4 w-full h-[38rem] shadow-2xl px-6 pt-6">
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
        <h1>Item added to bag</h1>
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
        className="sm:mb-0 mb-6 mr-2 border border-gray-300 px-8 py-3 text-sm lg:mb-2"
      >
        KEEP SHOPPING
      </button>
      <Link
        to="/bag"
        className="mr-2 bg-black text-white border border-gray-300 px-8 py-[14px] text-sm"
      >
        <button className="mt-2">
          {`VIEW BAG (${cart.items.reduce(
            (sum, item) => sum + item.quantity,
            0
          )})`}
        </button>
      </Link>
      <div className="bg-gray-300 h-[1px] w-full sm:mt-6"></div>
      <div className="overflow-y-auto pt-6">
        <h1 className="text-md font-semibold mb-4">You may also like:</h1>

        {shoesArray
          .filter(
            (product) => product.brand === shoe.brand && product.id != shoe.id
          )
          .map((product) => (
            <a
              href={`/${product.id}`}
              className="flex gap-4 items-center font-light overflow-y-scroll"
            >
              <img
                className="mt-4 h-auto w-40 lg:w-1/3"
                src={product.images[0]}
                alt=""
              />
              <div>
                <h1 className="lg:text-md md:text-sm mt-4">{product.name}</h1>
                <h2 className="lg:text-md md:text-sm">${product.price}</h2>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};
