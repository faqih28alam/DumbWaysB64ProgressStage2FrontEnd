// Products.tsx
// src/pages/Products.tsx

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ProductType = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
};

export default function Products() {
    // 1. Separate the source data from the displayed data
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 1000);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // 2. Fetch Logic: Fetch ONLY once when component mounts
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await api.get("/products");
                setProducts(res.data);
                setFilteredProducts(res.data); // Initialize filtered list with all products
            } catch(error) {
                console.log("fail to fetch data products", error);
            } finally {
                setLoading(false);
            }   
        }
        fetchData();
    }, []); // Empty dependency array means this runs once

    // 3. Filter Logic: Runs whenever debouncedSearch or the original products list changes
    useEffect(() => {
        if (!debouncedSearch.trim()) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [debouncedSearch, products]);

    return (
        <div className="p-4 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-4xl mb-4 font-bold">Store Products</h1>

            <div className="w-full md:w-1/3 mb-4">
                <Input 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
            </div>

            {loading ? (
                <p className="text-xl animate-pulse">Loading products...</p>
            ) : filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-2xl text-muted-foreground">No products found for "{debouncedSearch}"</p>
                    <Button variant="link" onClick={() => setSearchTerm("")}>Clear search</Button>
                </div>
            ) : (
                // 4. Map over filteredProducts instead of products
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <Dialog key={product.id}>
                            <DialogTrigger asChild>
                                <Card onClick={() => setSelectedProduct(product)} className="cursor-pointer hover:shadow-md transition">
                                    <CardHeader>
                                        <CardTitle>{product.title}</CardTitle>
                                        <CardContent>
                                            <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded" />
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{selectedProduct?.title}</DialogTitle>
                                    <DialogDescription>
                                        {selectedProduct?.description}
                                    </DialogDescription>
                                    {selectedProduct && (
                                        <ProductCard 
                                            product={{
                                                id: selectedProduct.id,
                                                name: selectedProduct.title,
                                                price: selectedProduct.price || 0,
                                                image: selectedProduct.image || "https://via.placeholder.com/150"
                                            }} 
                                        />
                                    )}
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </ul>
            )}        
        </div>
    )
}