import { shoesArray } from "../data/shoes.js";

export default function Nike({ searchQuery }) {
  const shoeData = shoesArray;

  return (
    <main className="mt-[105px]">
      <section className="sm:container m-auto mb-10">
        {searchQuery === "" ? null : (
          <>
            <h1 className="pt-4 px-4 text-gray-500 mb-4 font-light">{`'${searchQuery}'`}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
              {shoeData
                .filter((shoe) => {
                  const shoeName = shoe.name.toLowerCase();
                  const shoeBrand = shoe.brand.toLowerCase();
                  const search = searchQuery.toLowerCase();
                  return (
                    shoeName.includes(search) || shoeBrand.includes(search)
                  );
                })
                .map((shoe, index) => {
                  return (
                    <a href={`/${shoe.id}`} key={index} id={shoe.id}>
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
                    </a>
                  );
                })}
            </div>
          </>
        )}

        <h1 className="pt-4 text-2xl font-thin sm:p-0 sm:p-4 px-4 pb-4">
          Adidas
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 gap-4 sm:px-4 px-4">
          {shoeData
            .filter((shoe) => {
              const shoeBrand = shoe.brand.toLowerCase();

              return shoeBrand === "adidas";
            })
            .map((shoe, index) => {
              return (
                <a href={`/${shoe.id}`} key={index} id={shoe.id}>
                  <div className="flex flex-col items-left p-4 justify-between h-72 border border-black">
                    <div className="flex gap-10 justify-between">
                      <h1 className="text-[0.9rem] font-light">{shoe.name}</h1>
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
