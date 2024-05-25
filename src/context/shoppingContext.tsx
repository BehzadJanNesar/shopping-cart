import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
type ShoppingproviderProps = {
   children: ReactNode;
};
type ShoppingContext = {
   openCart: () => void;
   closeCart: () => void;
   getQuantity: (id: number) => number;
   increaseCartQuantity: (id: number) => void;
   decreaseCartQuantity: (id: number) => void;
   removeFromCart: (id: number) => void;
   cartItems: cartItemsState[];
   cartQuantity: number;
};
type cartItemsState = {
   id: number;
   quantity: number;
};
const shoppnigContext = createContext({} as ShoppingContext);

export function UseShoppingContext() {
   return useContext(shoppnigContext);
}

export function UseShoppingProvider({ children }: ShoppingproviderProps) {
   const [cartItems, setCartItems] = useState<cartItemsState[]>([]);
   const [isOpen, setIsOpen] = useState(false);

   const openCart = () => setIsOpen(true);
   const closeCart = () => setIsOpen(false);

   const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
   function getQuantity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
   }
   function increaseCartQuantity(id: number) {
      setCartItems((cartItems) => {
         if (cartItems.find((item) => item.id === id) == null) {
            return [...cartItems, { id, quantity: 1 }];
         } else {
            return cartItems.map((item) => {
               if (item.id == id) {
                  return { ...item, quantity: item.quantity + 1 };
               } else {
                  return item;
               }
            });
         }
      });
   }
   function decreaseCartQuantity(id: number) {
      setCartItems((cartItems) => {
         if (cartItems.find((item) => item.id === id)?.quantity === 1) {
            return cartItems.filter((item) => item.id !== id);
         } else {
            return cartItems.map((item) => {
               if (item.id == id) {
                  return { ...item, quantity: item.quantity - 1 };
               } else {
                  return item;
               }
            });
         }
      });
   }
   function removeFromCart(id: number) {
      setCartItems((cartItems) => {
         return cartItems.filter((item) => item.id !== id);
      });
   }
   const value = {
      getQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartItems,
      cartQuantity,
      openCart,
      closeCart,
   };

   return (
      <shoppnigContext.Provider value={value}>
         {children}
         <ShoppingCart isOpen={isOpen} />
      </shoppnigContext.Provider>
   );
}
