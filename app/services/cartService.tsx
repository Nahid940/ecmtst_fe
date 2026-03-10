// services/cartService.js

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/reserve/product`;
export const addToCart = async (productId, quantity = 1) => {
  try {
    const token = localStorage.getItem("token"); // JWT token
    if (!token) throw new Error("User not logged in");

    const response = await fetch(`${API_URL}/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ quantity }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Failed to add to cart");
    }

    return data; // return success message or cart data
  } catch (err) {
    throw err;
  }
};
