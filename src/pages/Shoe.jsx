import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesArray, getShoeData } from "../data/shoes";
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
    <div className="mt-12 lg:mt-28 overflow-hidden">
      {toggleModal ? (
        <CartModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
      ) : null}
      {toggleModal ? (
        <div className="z-30 bg-black opacity-20 fixed top-0 right-0 w-full h-full text-red-500"></div>
      ) : null}
      {shoe ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center overflow-hidden">
            <SmallCarousel images={shoe.images} shoe={shoe} />
            <div className="relative px-8 text-lg font-light lg:w-3/5">
              <div>
                <h2 className="text-gray-500 ">{shoe.brand}</h2>
                <h1 className="text-2xl -mt-1 mb-1">{shoe.name}</h1>
              </div>
              <h2 className="mb-4 text-xl">
                ${shoe.price}{" "}
                {shoe.isSoldOut ? (
                  <div className="text-red-500 text-lg font-bold uppercase mb-4">
                    Sold Out
                  </div>
                ) : null}
              </h2>

              <select
                name="Size"
                required
                className="mb-4 text-xl w-24 border border-gray-300 p-1"
                value={size}
                onChange={handleSizeChange}
                disabled={shoe.isSoldOut ? true : false}
              >
                <option value="" disabled selected hidden>
                  Size
                </option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
              <br />
              <button
                disabled={shoe.isSoldOut ? true : false}
                onClick={() => {
                  if (size === "") {
                    setSizeWarning(true);
                  } else {
                    cart.addOneToCart(shoe.id);
                    setToggleModal(true);
                    setSizeWarning(false);
                  }
                }}
                className={
                  shoe.isSoldOut
                    ? "border border-gray-300 text-gray-500 px-6 py-2 mb-[2.1rem]"
                    : "border border-gray-300 hover:border-black px-6 py-2 mb-[2.1rem]"
                }
                style={!sizeWarning ? { marginBottom: "2.1rem" } : null}
              >
                Add to Bag
              </button>
              {sizeWarning ? (
                <h1 className="absolute top-[12.8rem] text-red-500 text-sm">
                  Please pick a size.
                </h1>
              ) : null}
              <p className="mb-10">{shoe.desc}</p>
            </div>
          </div>
        </>
      ) : null}
      <div className="h-[0.5px] w-full bg-gray-300"></div>
      <div className="sm:px-24 p-8 mb-6">
        <h1 className="text-md font-light mb-4">More {shoe.brand} shoes:</h1>
        <div className="sm:flex gap-6 ">
          {shoesArray
            .filter(
              (product) =>
                product.brand === shoe.brand && product.id !== shoe.id
            )
            .map((product) => (
              <a
                href={`/${product.id}`}
                className="flex gap-4 items-center font-light w-96"
              >
                <img
                  className="mt-4 h-auto w-40"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div>
                  <h1 className="lg:text-md md:text-sm mt-4">{product.name}</h1>
                  <h2 className="lg:text-md md:text-sm">${product.price}</h2>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
