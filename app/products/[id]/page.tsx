import { getProductById } from "@/app/services/productservice";
import { Product } from "@/app/types/Product";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export default async function ProductView({ params }: Props) {

  const productId = Number( params.id);

  if (isNaN(productId)) {
    return <p>Invalid product ID</p>;
  }

  let product: Product | null = null;

  try {
    product = await getProductById(productId);
  } catch (err) {
    console.error(err);
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <Image
          src={product.image || "/products/default.jpg"}
          alt={product.name}
          width={500}
          height={500}
          className="rounded shadow"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-700">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}