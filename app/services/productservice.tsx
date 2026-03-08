import { Product } from "@/app/types/Product";

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 1999,
    image: "/products/laptop.jpg",
    description: "Apple M3 powered professional laptop"
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 999,
    image: "/products/iphone.jpg",
    description: "Latest Apple smartphone"
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 299,
    image: "/products/headphone.jpg",
    description: "Noise cancelling headphones"
  },
  {
    id: 4,
    name: "Samsung Monitor",
    price: 450,
    image: "/products/monitor.jpg",
    description: "27 inch 4K monitor"
  }
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  return products.find(product => product.id === id);
}