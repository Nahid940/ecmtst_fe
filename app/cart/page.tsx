"use client"
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Fetch cart from API
  const fetchCart = async () => {
    setError("");
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You are not logged in");

      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Cart API response:", data);

      const itemsArray = Array.isArray(data) ? data : data.items || [];
      const itemsWithCountdown = itemsArray.map(item => ({
        ...item,
        remainingSeconds: item.remaining_seconds
      }));

      setCartItems(itemsWithCountdown);

    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Countdown timer for remaining_seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCartItems(prev =>
        prev.map(item => ({
          ...item,
          remainingSeconds: item.remainingSeconds > 0 ? item.remainingSeconds - 1 : 0
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckout = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You are not logged in");

      const response = await fetch("http://127.0.0.1:8000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cartItems })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Checkout failed");
      }

      setSuccess("Checkout successful!");
      setCartItems([]); // empty cart after checkout

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) =>  (
            <div key={index} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-red-500">
                  Expiring in: {Math.floor(item.remainingSeconds / 60)} min{" "}
                  {item.remainingSeconds % 60} sec
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Processing..." : "Checkout"}
          </button>
        </div>
      )}
    </div>
  );
}
