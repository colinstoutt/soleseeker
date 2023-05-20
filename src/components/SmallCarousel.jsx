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
        <>
          <div className="relative flex items-center justify-center mt-10 mb-10">
            {images.map((image, index) =>
              index === carouselIndex ? (
                <div
                  key={index}
                  className="relative bg-white flex justify-center items-center h-60"
                >
                  <img
                    className="p-10 w-[350px] h-auto"
                    src={image}
                    alt={shoe.name}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className="flex items-center justify-center gap-3 mb-10">
            {images.map((image, index) => (
              <img
                className="cursor-pointer h-auto w-[65px]"
                onClick={() => setCarouselIndex(index)}
                src={image}
                alt={shoe.name}
                style={carouselIndex !== index ? { opacity: "0.5" } : null}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};
