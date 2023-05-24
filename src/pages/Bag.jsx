import { useContext } from "react";
import { CartContext } from "../cartContext";
import { shoesArray, getShoeData } from "../data/shoes";

export default function Bag() {
  const cart = useContext(CartContext);

  return <div>Bag</div>;
}
