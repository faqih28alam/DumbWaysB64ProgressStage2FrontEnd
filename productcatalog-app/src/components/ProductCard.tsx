// ProductCard.tsx

import { useCart, type Product} from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"; 

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, cart } = useCart();
  
  // Requirement: Conditional rendering for the button
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card className="overflow-hidden flex flex-col justify-between">
      <CardHeader className="p-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-48 w-full object-cover transition-hover hover:scale-105 duration-300" 
        />
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
        <p className="text-muted-foreground mt-1">${product.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)}
          variant={isInCart ? "outline" : "default"}
          className="w-full"
        >
          {isInCart ? "Add More (+1)" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};