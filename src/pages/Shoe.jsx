import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getShoeData } from "../data/shoes";
import { SmallCarousel } from "../components/SmallCarousel";

import { CartContext } from "../cartContext";

export default function Shoe() {
  const { id } = useParams();
  const shoe = getShoeData(id);
  const cart = useContext(CartContext);
  console.log(cart.items);

  return (
    <div className="mt-20">
      {shoe ? (
        <>
          <div className="flex flex-col justify-center">
            <SmallCarousel images={shoe.images} shoe={shoe} />
          </div>
          <div className="px-8 text-lg font-light">
            <div>
              <h2 className="text-gray-500 ">{shoe.brand}</h2>
              <h1 className="text-2xl -mt-1 mb-1">{shoe.name}</h1>
            </div>
            <h2 className="mb-4 text-xl">${shoe.price}</h2>
            <select
              name="Size"
              className="mb-4 text-xl w-24 border border-gray-300 p-1"
            >
              <option value="size">Size</option>
              <option value="6">6</option>
              <option value="6">6.5</option>
              <option value="6">7</option>
              <option value="6">7.5</option>
              <option value="6">8</option>
              <option value="6">8.5</option>
              <option value="6">9</option>
              <option value="6">9.5</option>
              <option value="6">10</option>
              <option value="6">10.5</option>
              <option value="6">11</option>
              <option value="6">11.5</option>
              <option value="6">12</option>
              <option value="6">12.5</option>
              <option value="6">13</option>
              <option value="6">14</option>
              <option value="6">15</option>
            </select>
            <br />

            <button
              onClick={() => cart.addOneToCart(shoe.id)}
              className="border border-gray-300 hover:border-black px-6 py-2 mb-10"
            >
              Add to Bag
            </button>

            <p className="mb-20">{shoe.desc}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}
