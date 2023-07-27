import { createContext, useState } from "react";
import { CartContextType, CartItem, Product } from "src/types";

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [productId: number]: CartItem }>(
    {}
  );

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems[product.id];
      if (existingItem) {
        return {
          ...prevCartItems,
          [product.id]: { product, quantity: existingItem.quantity + 1 },
        };
      } else {
        return {
          ...prevCartItems,
          [product.id]: { product, quantity: 1 },
        };
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems[productId];
      if (existingItem) {
        const updatedQuantity = existingItem.quantity - 1;
        if (updatedQuantity <= 0) {
          const newCartItems = { ...prevCartItems };
          delete newCartItems[productId];
          return newCartItems;
        } else {
          return {
            ...prevCartItems,
            [productId]: { ...existingItem, quantity: updatedQuantity },
          };
        }
      } else {
        return prevCartItems;
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
