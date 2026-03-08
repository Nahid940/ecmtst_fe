import ProductCard from "@/app/components/ProductCard";
import { getProducts } from "@/app/services/productservice";

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        
      </h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </div>
  );

}