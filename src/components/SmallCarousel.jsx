import React, { useState } from "react";

export const SmallCarousel = ({ images, shoe }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleIncrement = () => {
    carouselIndex < images.length - 1
      ? setCarouselIndex(carouselIndex + 1)
      : setCarouselIndex(0);
  };

  const handleDecrement = () => {
    carouselIndex > 0
      ? setCarouselIndex(carouselIndex - 1)
      : setCarouselIndex(images.length - 1);
  };

  console.log(carouselIndex);

  return (
    <>
      {images ? (
        <div className="lg:w-[500px]">
          <div className="relative flex items-center justify-center mt-10 mb-10">
            <svg
              onClick={() => handleDecrement()}
              className="w-8 h-8 cursor-pointer bg-white shadow-sm p-2 no-select"
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>

            {images.map((image, index) =>
              index === carouselIndex ? (
                <div
                  key={index}
                  className="relative bg-white flex justify-center items-center h-60"
                >
                  <img
                    className="p-10 w-[350px] lg:w-[450px] h-auto"
                    src={image}
                    alt={shoe.name}
                  />
                </div>
              ) : null
            )}

            <svg
              onClick={() => handleIncrement()}
              className="w-8 h-8 cursor-pointer bg-white shadow-sm p-2 no-select"
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 mb-10">
            {images.map((image, index) => (
              <img
                key={index}
                className="cursor-pointer h-auto w-[65px]"
                onClick={() => setCarouselIndex(index)}
                src={image}
                alt={shoe.name}
                style={carouselIndex !== index ? { opacity: "0.5" } : null}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
