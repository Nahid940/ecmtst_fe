import { Product } from "@/app/types/Product";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`;

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_URL, {
    cache: "no-store", // always get fresh data in Next.js 13+
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res)
    throw new Error("Failed to fetch product");
  }

  return res.json();
}