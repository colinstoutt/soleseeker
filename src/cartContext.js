import { createContext, useState, useEffect } from "react";
import { getShoeData } from "./data/shoes";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  resetCart: () => {},
});

const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(localStorageCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // {id: 1, quantity: 2}
  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    return quantity !== undefined ? quantity : 0;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);
    quantity === 0 // if there are 0 products in the cart
      ? setCartProducts([
          // set the product in the cart. give it a quantity of 1
          ...cartProducts,
          {
            id: id,
            quantity: 1,
          },
        ])
      : setCartProducts(
          // else, map through the cart
          cartProducts.map(
            (product) =>
              product.id === id // if a product matches the id argument that was given, add 1 to quantity
                ? { ...product, quantity: product.quantity + 1 }
                : product // else, return product
          )
        );
    localStorage.setItem("cart", cartProducts);
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    quantity === 1
      ? deleteFromCart(id)
      : setCartProducts(
          // else, map through the cart
          cartProducts.map(
            (product) =>
              product.id === id // if a product matches the id argument that was given, remove 1 to quantity
                ? { ...product, quantity: product.quantity - 1 }
                : product // else, return product
          )
        );
  };

  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((product) => {
      const shoeData = getShoeData(product.id);
      totalCost += shoeData.price * product.quantity;
    });
    return totalCost;
  };

  const resetCart = () => {
    setCartProducts([]);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    resetCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
