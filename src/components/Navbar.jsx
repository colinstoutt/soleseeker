import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import SearchIcon from "@mui/icons-material/Search";

import { CartContext } from "../cartContext";

export const Navbar = () => {
  const [toggleProducts, setToggleProducts] = useState(false);

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-white border-b border-black px-4 py-2 ">
        <a
          href="/"
          className="text-2xl cursor-pointer font-black italic bg-black text-white pr-[0.1rem] absolute left-1/2 -translate-x-1/2"
        >
          soleseeker
        </a>
        <div className="flex justify-between items-center uppercase">
          {toggleProducts ? null : (
            <MenuIcon
              sx={{ fontSize: "1.9rem" }}
              className="md:hidden cursor-pointer"
              onClick={() => {
                setToggleProducts(!toggleProducts);
              }}
            />
          )}
          {!toggleProducts ? null : (
            <CloseIcon
              sx={{ fontSize: "1.9rem" }}
              className="md:hidden cursor-pointer"
              onClick={() => {
                setToggleProducts(!toggleProducts);
              }}
            />
          )}

          <div className="flex gap-3">
            <a
              href="/"
              className=" button-effect-1 md:block hidden text-md  uppercase font-light"
            >
              Home
            </a>
            <a
              href="#"
              className="button-effect-1 md:block hidden text-md  font-light"
              onClick={() => setToggleProducts(!toggleProducts)}
            >
              Products
            </a>
          </div>
          <div className="flex gap-3 items-center ">
            <div className="group relative">
              <div className="absolute top-[1.24rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black cursor-pointer z-10 text-sm">
                <span className="group-hover:text-white z-10">
                  {productsCount === 0 ? "" : productsCount}
                </span>
              </div>
              <div className=" cursor-pointer group-hover:bg-black absolute top-[0.745rem] right-[0.39rem] h-[1rem] w-[1.4rem] bg-white"></div>
              <WorkSharpIcon
                sx={{ fontSize: "2.2rem" }}
                className="cursor-pointer group-hover:text-black  transition-all duration-150 "
              />
            </div>
          </div>
        </div>
      </nav>
      {toggleProducts ? (
        <div className="flex gap-3 bg-white px-4 py-2 font-light border-b border-black">
          <a href="#" className="button-effect-1">
            All Products
          </a>
          <h1>|</h1>
          <a href="#" className="button-effect-1">
            Nike
          </a>
          <a href="#" className="button-effect-1">
            Jordan
          </a>
          <a href="#" className="button-effect-1">
            Adidas
          </a>
        </div>
      ) : null}

      <div className=" flex items-center h-6 border-b border-black py-6 px-4 bg-white">
        <SearchIcon className="mr-4" />
        <input
          type="text"
          placeholder="What are you looking for?"
          size="auto"
          className="font-light w-full outline-none uppercase text-sm bg-white"
        ></input>
      </div>
    </div>
  );
};
