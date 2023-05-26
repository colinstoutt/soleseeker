import { useContext, useState } from "react";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import { useLocation } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { CartContext } from "../cartContext";

export const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [toggleProducts, setToggleProducts] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  console.log(searchQuery);

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-white border-b border-black px-4 py-3 ">
        <a
          href="/"
          className="text-2xl cursor-pointer font-black italic bg-black text-white pr-[0.1rem] absolute left-1/2 -translate-x-1/2"
        >
          soleseeker
        </a>
        <div className="flex justify-between items-center uppercase">
          {toggleProducts ? null : (
            <svg
              className="md:hidden w-7 h-7 cursor-pointer"
              onClick={() => {
                setToggleProducts(!toggleProducts);
              }}
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          )}
          {!toggleProducts ? null : (
            <svg
              className="md:hidden w-7 h-7 cursor-pointer"
              onClick={() => {
                setToggleProducts(!toggleProducts);
              }}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}

          <div className="flex gap-3">
            <a
              href="/"
              className="transition-all duration-150 hover:bg-black hover:text-white md:block hidden text-md  uppercase font-light"
            >
              Home
            </a>
            <a
              href="#"
              className="transition-all duration-150 hover:bg-black hover:text-white md:block hidden text-md  font-light"
              onClick={() => setToggleProducts(!toggleProducts)}
            >
              Products
            </a>
          </div>
          <div className="flex gap-3 items-center ">
            <div className="group relative">
              <div className="absolute top-[1.24rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black cursor-pointer z-10 text-sm">
                <span className="group-hover:text-white z-10 no-select">
                  {productsCount === 0 ? "" : productsCount}
                </span>
              </div>
              <div className="transition-all duration-100 cursor-pointer group-hover:bg-black absolute top-[0.745rem] right-[0.39rem] h-[1rem] w-[1.4rem] bg-white"></div>
              <WorkSharpIcon
                sx={{ fontSize: "2.2rem" }}
                className="cursor-pointer group-hover:text-black "
              />
            </div>
          </div>
        </div>
      </nav>
      {toggleProducts ? (
        <div className="flex gap-3 bg-white px-4 py-2 font-light border-b border-black no-select">
          <a
            href="/all-products"
            className="transition-all duration-150 hover:bg-black hover:text-white"
          >
            All Products
          </a>
          <h1>|</h1>
          <a
            href="/nike"
            className="transition-all duration-150 hover:bg-black hover:text-white"
          >
            Nike
          </a>
          <a
            href="/jordan"
            className="transition-all duration-150 hover:bg-black hover:text-white"
          >
            Jordan
          </a>
          <a
            href="/adidas"
            className="transition-all duration-150 hover:bg-black hover:text-white"
          >
            Adidas
          </a>
        </div>
      ) : null}

      {location.pathname === "/" ||
      location.pathname === "/nike" ||
      location.pathname === "/jordan" ||
      location.pathname === "/adidas" ||
      location.pathname === "/all-products" ? (
        <div className=" flex items-center h-6 border-b border-black py-6 px-4 bg-white">
          <SearchIcon
            type="submit"
            className="mr-4 text-gray-400 hover:text-black hover:cursor-pointer"
            onClick={() => handleSearch()}
          />
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="What are you looking for?"
            size="auto"
            className="font-light w-full outline-none uppercase text-sm bg-white"
          ></input>
        </div>
      ) : null}
    </div>
  );
};
