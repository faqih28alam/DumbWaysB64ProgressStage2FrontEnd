import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input"; // Import ShadCN Input
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ProductType = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  
  // 1. Search States (Requirement: controlled input)
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { addToCart } = useCart();

  // 2. Debounce Logic (Requirement: implementasikan debounce)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 3. Fetch Logic (Requirement: fetch data based on search)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Note: Using 'title_like' or 'q' depending on your API capability
        const res = await api.get(`/products?title_like=${debouncedSearch}`);
        setProducts(res.data);
      } catch (error) {
        console.log("fail to fetch data products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [debouncedSearch]);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold">Store Products</h1>
        
        {/* Search Input Field */}
        <div className="w-full md:w-1/3">
          <Input 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl animate-pulse">Searching...</p>
        </div>
      ) : products.length === 0 ? (
        // Requirement: Tampilkan pesan jika produk tidak ditemukan
        <div className="text-center py-20">
          <p className="text-2xl text-muted-foreground">No products found for "{debouncedSearch}"</p>
          <Button variant="link" onClick={() => setSearchTerm("")}>Clear search</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
              <ProductCard 
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price || 0,
                  image: product.image || "https://via.placeholder.com/150"
                }} 
              />
            </div>
          ))}
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.title}</DialogTitle>
            <DialogDescription className="pt-4">
              <img src={selectedProduct?.image} alt={selectedProduct?.title} className="w-full h-48 object-contain mb-4 rounded" />
              {selectedProduct?.description}
              <p className="mt-4 text-lg font-bold text-primary">${selectedProduct?.price}</p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
             <Button variant="outline" onClick={() => setSelectedProduct(null)}>Close</Button>
             <Button onClick={() => {
                if (selectedProduct) {
                  addToCart({
                    id: selectedProduct.id,
                    name: selectedProduct.title,
                    price: selectedProduct.price,
                    image: selectedProduct.image
                  });
                }
             }}>Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}