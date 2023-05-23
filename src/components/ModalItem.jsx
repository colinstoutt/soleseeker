export const ModalItem = ({ shoe }) => {
  return (
    <div className="my-6 lg:block flex gap-10 items-center">
      <img
        className="lg:mb-4 lg:w-1/2 w-40 h-auto"
        src={shoe.images[0]}
        alt={shoe.name}
      />
      <div className="font-light">
        <h1 className="text-gray-500">{shoe.brand}</h1>
        <h1>{shoe.name}</h1>
        <h1>${shoe.price}</h1>
      </div>
    </div>
  );
};
