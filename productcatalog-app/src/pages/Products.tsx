// Products.tsx

import { useEffect, useState } from "react"

// import shadcn Card dependencies from documentation
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { api } from "@/services/api"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type ProductType = {
    id: number;
    title: string;
    description: string;
}

export default function Products() {
    const [ products, setProducts] = useState<ProductType[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ selectedProduct, setSelectedProduct ] = useState<ProductType | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
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
    }, [])

    return (
        <div className="items-center justify-center h-screen">
            <h1 className="text-4xl mb-4 font-bold">Products</h1>
            {loading?(
                <p className="text-card">Loading...</p>
            ):(
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Dialog key={product.id}>
                            <DialogTrigger asChild>
                                <Card onClick={()=> setSelectedProduct(product)} className="cursor-pointer hover:shadow-md transition">
                                    <CardHeader>
                                        <CardTitle>{product.title}</CardTitle>
                                        <CardDescription className="truncate">{product.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>{selectedProduct?.title}</DialogTitle>
                                <DialogDescription>
                                    {selectedProduct?.description}
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </ul>
            )}        
        </div>
    )
}