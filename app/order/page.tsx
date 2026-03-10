"use client"
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    setError("");
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You are not logged in");

      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Failed to fetch orders");

      const ordersArray = Array.isArray(data) ? data : data.orders || [];
      setOrders(ordersArray);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">My Orders</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 shadow">{error}</div>
      )}

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center text-lg mt-10">You have no orders yet.</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                  Order #{order.id}
                </h2>
                <div className="flex gap-6 text-gray-700 font-medium">
                  <p>Total: ${order.total_amount}</p>
                  <p>Date: {order.created_date} - {order.created_time}</p>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 text-gray-700 font-medium">Product</th>
                      <th className="py-2 px-4 text-gray-700 font-medium">Quantity</th>
                      <th className="py-2 px-4 text-gray-700 font-medium">Price</th>
                      <th className="py-2 px-4 text-gray-700 font-medium">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{item.name}</td>
                        <td className="py-2 px-4">{item.quantity}</td>
                        <td className="py-2 px-4">${item.price}</td>
                        <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
