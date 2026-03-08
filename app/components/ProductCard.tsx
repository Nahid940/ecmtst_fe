import { Product } from "@/app/types/Product";
import Link from "next/link";
export default function ProductCard({ product }: { product: Product }) {

  return (
    <Link href={`/products/${product.id}`} className="block border rounded p-4 hover:shadow-lg transition">
        <div className="border border-gray-300 rounded-lg p-3 shadow-sm hover:shadow-md transition">

        <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
            Product Image
        </div>

        <h3 className="text-lg text-blue-500 font-semibold">
            {product.name}
        </h3>

        <p className="text-blue-500 mb-3">
            ${product.price}
        </p>

        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 cursor-pointer">
            Add to Cart
        </button>

        </div>
    </Link>
  );

}