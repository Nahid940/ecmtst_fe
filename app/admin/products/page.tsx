import { getProducts } from "@/app/services/productservice";

export default async function AdminProducts() {

  const products = await getProducts();

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Products
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
          </tr>
        </thead>

        <tbody>

          {products.map(product => (
            <tr key={product.id} className="border-t">

              <td className="p-3">{product.id}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">${product.price}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}