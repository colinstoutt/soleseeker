import { shoesArray } from "../data/shoes.js";
import { Link } from "react-router-dom";

export default function Nike({ searchQuery }) {
  const shoeData = shoesArray;

  return (
    <main className="mt-[105px]">
      <section className="sm:container m-auto mb-10">
        {searchQuery === "" ? null : (
          <>
            <h1 className="pt-6 px-4 text-gray-500 mb-4 font-light">{`'${searchQuery}'`}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
              {shoeData
                .filter((shoe) => {
                  const shoeName = shoe.name.toLowerCase();
                  const shoeBrand = shoe.brand.toLowerCase();
                  const search = searchQuery.toLowerCase();
                  return shoeBrand !== "adidas"
                    ? null
                    : shoeName.includes(search) || shoeBrand.includes(search);
                })
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((shoe, index) => {
                  return (
                    <Link to={`/${shoe.id}`} key={index} id={shoe.id}>
                      <div className="flex flex-col items-left p-4 justify-between h-72 border border-black">
                        <div className="flex gap-10 justify-between">
                          <h1 className="text-[0.9rem] font-light">
                            {shoe.name}
                          </h1>
                          <h1 className="text-[0.9rem] font-light">
                            ${shoe.price}
                          </h1>
                        </div>
                        <img
                          className="h-auto w-[250px]"
                          src={shoe.images[0]}
                          alt={shoe.name}
                        ></img>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </>
        )}

        <div className="flex justify-center lg:py-4 py-2">
          <svg
            className="w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            height="800"
            width="1200"
            viewBox="-44.99895 -50.68325 389.9909 304.0995"
          >
            <g
              clip-path="url(#d)"
              transform="matrix(21.955 0 0 -21.955 -2044.076 10480)"
            >
              <path d="M105.72 468.11c-.639 0-1.018.327-1.047.798h.611c0-.157.087-.366.465-.379.262 0 .407.157.407.275-.029.183-.262.196-.494.236a2.389 2.389 0 00-.611.156.626.626 0 00-.32.563c0 .419.35.746.96.746.582 0 .96-.301.988-.759h-.581c0 .117-.029.314-.378.314-.233 0-.378-.039-.407-.209 0-.236.494-.223.872-.314.349-.092.582-.314.582-.629 0-.576-.465-.798-1.047-.798" />
            </g>
            <path d="M32.56 117.8l44.042-25.578 23.624 40.53H40.86" />
            <path
              stroke-width="12.888"
              stroke="#000"
              d="M125.174 201.12v-51.155"
            />
            <g
              clip-path="url(#c)"
              transform="matrix(21.955 0 0 -21.955 -2044.076 10480)"
            >
              <path d="M93.655 469.31c0-.366.32-.667.668-.667.379 0 .669.301.669.667 0 .353-.29.667-.669.667a.692.692 0 01-.668-.667m.639-1.204c-.639 0-1.191.537-1.191 1.204 0 .667.552 1.191 1.191 1.191.262 0 .495-.066.698-.209v.183h.582v-2.316h-.582v.144c-.174-.131-.436-.197-.698-.197" />
            </g>
            <path d="M196.614 132.74L135.337 25.863 179.38 0l76.601 132.74" />
            <g
              clip-path="url(#b)"
              transform="matrix(21.955 0 0 -21.955 -2044.076 10480)"
            >
              <path d="M96.33 469.31c0-.366.291-.667.669-.667.348 0 .669.301.669.667a.693.693 0 01-.669.667.672.672 0 01-.669-.667m.64-1.204a1.19 1.19 0 00-1.192 1.204c0 .667.523 1.191 1.192 1.191.261 0 .494-.066.698-.209v.981h.581v-3.114h-.581v.144a1.265 1.265 0 00-.698-.197" />
            </g>
            <path d="M84.27 72.119l44.68-25.27 49.156 85.888h-46.61v12.646H118.74v-12.646" />
            <g
              clip-path="url(#a)"
              transform="matrix(21.955 0 0 -21.955 -2044.076 10480)"
            >
              <path d="M106.39 470.7a.3.3 0 00-.291.288.3.3 0 00.291.288.283.283 0 00.291-.288.283.283 0 00-.291-.288m0 .536c-.146 0-.233-.117-.233-.248s.087-.249.233-.249c.145 0 .232.118.232.249s-.087.248-.232.248" />
              <path d="M106.45 470.83l-.058.131h-.058v-.131h-.044v.314h.131c.029 0 .087-.04.087-.092a.093.093 0 00-.058-.091l.058-.131m-.116.274h-.058V471h.058c.058 0 .058.013.058.052 0 .027 0 .052-.058.052m-3.842-1.794c0-.366.291-.667.669-.667.349 0 .668.301.668.667a.691.691 0 01-.668.667.672.672 0 01-.669-.667m.639-1.204a1.19 1.19 0 00-1.191 1.204c0 .667.523 1.191 1.191 1.191.262 0 .495-.066.698-.209v.183h.553v-2.316h-.553v.144a1.26 1.26 0 00-.698-.197m-3.312 1.204c0-.366.32-.667.669-.667.378 0 .669.301.669.667a.672.672 0 01-.669.667.692.692 0 01-.669-.667m1.338 1.963h.581v-3.114h-.581v.144a1.107 1.107 0 00-.669-.197c-.669 0-1.221.537-1.221 1.204 0 .667.552 1.191 1.221 1.191.261 0 .494-.066.669-.209z" />
            </g>
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
          {shoeData
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((shoe) => {
              const shoeBrand = shoe.brand.toLowerCase();

              return shoeBrand === "adidas";
            })
            .map((shoe, index) => {
              return (
                <a href={`/${shoe.id}`} key={index} id={shoe.id}>
                  <div className="relative flex flex-col items-left p-4 justify-between h-72 border border-black">
                    <div className="flex gap-10 justify-between">
                      <h1 className="text-[0.9rem] font-light">
                        {shoe.name}
                        <br />
                        {shoe.isSoldOut ? (
                          <div className="text-red-500 font-bold uppercase mt-2">
                            Sold Out
                          </div>
                        ) : null}
                      </h1>
                      <h1 className="text-[0.9rem] font-light">
                        ${shoe.price}
                      </h1>
                    </div>
                    <img
                      className="h-auto w-[250px]"
                      src={shoe.images[0]}
                      alt={shoe.name}
                    ></img>
                  </div>
                </a>
              );
            })}
        </div>
      </section>
    </main>
  );
}
