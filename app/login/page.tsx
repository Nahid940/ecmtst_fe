"use client"
import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // console.log("Login success:", data);

        // Example: store token
        localStorage.setItem("token", data.access_token);
        window.location.href = "/"; 
      } else {
        setError(data.detail || "Invalid email or password");
      }

    } catch (error) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl text-green-500 font-bold mb-6 text-center">
          Login to Your Account
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600 cursor-pointer"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}
