// Cart.tsx

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [loading, setLoading] = useState(true);

  // Requirement: Simulate API call with loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8s simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl mb-6 font-bold">My Cart</h1>

      {loading ? (
        <p className="text-muted-foreground italic">Loading your items...</p>
      ) : cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {/* Requirement: Display items in cart */}
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price}</p>
              </div>

              {/* Requirement: Update Quantity & Remove Item */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
              </div>

              <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}
          
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
             <span className="text-xl font-bold">Total:</span>
             <span className="text-2xl font-bold">
                ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
             </span>
          </div>
        </div>
      )}
    </div>
  );
}