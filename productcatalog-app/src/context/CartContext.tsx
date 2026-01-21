// CartContext.tsx
// to handle the global state for shopping cart.
// Actions: addToCart, removeFromCart, updateQuantity
// Optimistic Update: When a user clicks "Add," update the local state immediately before the "API simulation" finishes.

import { createContext, useContext, useState} from "react";

// Define the Product and Cart Item Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  updateQuantity: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode  }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Calculate total items for the badge/icon
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add to Cart with Optimistic Update Logic
  const addToCart = async (product: Product) => {
    // Save previous state for rollback
    const previousCart = [...cart];

    // OPTIMISTIC UPDATE: Update UI immediately
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    try {
      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Syncing with server...");
      // If server returns error here, throw Error() to trigger catch
    } catch (error) {
      // ROLLBACK: If API fails, return to previous state
      console.error("Failed to sync cart, rolling back", error);
      setCart(previousCart);
      alert("Failed to add to cart. Please try again.");
    }
  };

  const updateQuantity = (id: string, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};