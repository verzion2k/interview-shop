import { CartContext } from "@components/contexts/CartContext";
import { useContext } from "react";
import { CartContextType } from "src/types";

export type UseCart = () => CartContextType;

export const useCart: UseCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
};
