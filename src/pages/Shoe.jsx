import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getShoeData } from "../data/shoes";
import { SmallCarousel } from "../components/SmallCarousel";
import { CartModal } from "../components/Modal";
import { CartContext } from "../cartContext";

export default function Shoe() {
  const { id } = useParams();
  const shoe = getShoeData(id);
  const cart = useContext(CartContext);

  const [size, setSize] = useState("");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const [sizeWarning, setSizeWarning] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="mt-20 lg:mt-40 overflow-hidden">
      {toggleModal ? (
        <CartModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
      ) : null}
      {toggleModal ? (
        <div className="z-30 bg-black opacity-20 fixed top-0 right-0 w-full h-full"></div>
      ) : null}

      {shoe ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center overflow-hidden">
            <SmallCarousel images={shoe.images} shoe={shoe} />
            <div className="px-8 text-lg font-light lg:w-3/5">
              <div>
                <h2 className="text-gray-500 ">{shoe.brand}</h2>
                <h1 className="text-2xl -mt-1 mb-1">{shoe.name}</h1>
              </div>
              <h2 className="mb-4 text-xl">${shoe.price}</h2>
              <select
                name="Size"
                className="mb-4 text-xl w-24 border border-gray-300 p-1"
                value={size}
                onChange={handleSizeChange}
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
                onClick={() => {
                  cart.addOneToCart(shoe.id);
                  setToggleModal(true);
                }}
                className="border border-gray-300 hover:border-black px-6 py-2"
                style={!sizeWarning ? { marginBottom: "2.1rem" } : null}
              >
                Add to Bag
              </button>
              {sizeWarning ? (
                <h1 className="mb-4 text-red-500 text-sm">
                  Please pick a size.
                </h1>
              ) : null}
              <p className="mb-20">{shoe.desc}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
