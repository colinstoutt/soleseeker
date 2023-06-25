import { useEffect } from "react";
import { shoesArray } from "../data/shoes.js";
import { Link } from "react-router-dom";

export default function Nike({ searchQuery }) {
  const shoeData = shoesArray;

  return (
    <main className="mt-[105px]">
      <div className="flex justify-center lg:py-4 py-2">
        <svg
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="356.39"
          viewBox="135.5 361.38 1000 356.39"
        >
          <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
        </svg>
      </div>
      <section className="sm:container m-auto mb-10">
        {searchQuery === "" ? null : (
          <>
            <h1 className="px-4 text-gray-500 mb-4 font-light">{`'${searchQuery}'`}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
              {shoeData

                .filter((shoe) => {
                  const shoeName = shoe.name.toLowerCase();
                  const shoeBrand = shoe.brand.toLowerCase();
                  const search = searchQuery.toLowerCase();
                  return shoeBrand !== "nike"
                    ? null
                    : shoeName.includes(search) || shoeBrand.includes(search);
                })
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((shoe, index) => {
                  return (
                    <Link to={`/${shoe.id}`} key={shoe.id} id={shoe.id}>
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

        <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
          {searchQuery === ""
            ? shoeData
                .sort((a, b) => a.name.localeCompare(b.name))
                .filter((shoe) => {
                  const shoeBrand = shoe.brand.toLowerCase();

                  return shoeBrand === "nike";
                })
                .map((shoe, index) => {
                  return (
                    <Link to={`/${shoe.id}`} key={shoe.id} id={shoe.id}>
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
                    </Link>
                  );
                })
            : null}
        </div>
      </section>
    </main>
  );
}
