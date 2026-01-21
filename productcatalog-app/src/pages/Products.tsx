// Products.tsx

import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { ProductCard } from "@/components/ProductCard";
// import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 

// import shadcn Card dependencies from documentation
import {
  Card,
    CardContent,
//   CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ProductType = {
    id: string; // Changed to string to match CartContext Product type
    title: string;
    price: number;
    description: string;
    image: string;
};

export default function Products() {
    const [ products, setProducts] = useState<ProductType[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ selectedProduct, setSelectedProduct ] = useState<ProductType | null>(null);

    // Search States (Requirement: controlled input)
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Access global cart actions
    // const { addToCart } = useCart();

    // Debounce Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500); // Wait 500ms after user stops typing
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch Logic
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await api.get("/products");
                setProducts(res.data);
            } catch(error) {
                console.log("fail to fetch data products", error);
            } finally {
                setLoading(false);
            }   
        }
        fetchData();
    }, [debouncedSearch])

    return (
        <div className="items-center justify-center h-screen">
            <h1 className="text-4xl mb-4 font-bold">Store Products</h1>

            {/* Search Input Field */}
            <div className="w-full md:w-1/3 mb-4">
            <Input 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
            </div>

            {loading?(
                <p className="text-xl animate-pulse">Searching...</p>
            ):products.length === 0 ? (
                // Show: No products found
                <div className="text-center py-20">
                    <p className="text-2xl text-muted-foreground">No products found for "{debouncedSearch}"</p>
                    <Button variant="link" onClick={() => setSearchTerm("")}>Clear search</Button>
                </div>
            ):(
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Dialog key={product.id}>
                            <DialogTrigger asChild>
                                <Card onClick={()=> setSelectedProduct(product)} className="cursor-pointer hover:shadow-md transition">
                                    <CardHeader>
                                        <CardTitle>{product.title}</CardTitle>
                                        <CardContent><img src={product.image} alt={product.title} className="w-20 h-20 rounded" /></CardContent>
                                        {/* <CardDescription className="truncate">{product.description}</CardDescription> */}
                                    </CardHeader>
                                </Card>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{selectedProduct?.title}</DialogTitle>
                                    <DialogDescription>
                                        {selectedProduct?.description}
                                    </DialogDescription>
                                    <ProductCard 
                                                product={{
                                                id: product.id,
                                                name: product.title,
                                                price: product.price || 0,
                                                image: product.image || "https://via.placeholder.com/150"
                                                }} 
                                    />
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </ul>
            )}        
        </div>
    )
}