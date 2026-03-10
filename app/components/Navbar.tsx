"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    setIsLoggedIn(false);
    window.location.href = "/"; // redirect to home
  };

  return (
    <nav className="bg-yellow-300  shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-xl font-bold text-gray-800">
          BuyMe
        </Link>

        <div className="flex items-center gap-6 text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/cart" className="hover:text-black">
              My Cart
          </Link>

          {isLoggedIn ? (
            <>
              <Link href="/order" className="hover:text-black">
                My Ordes
              </Link>
              <button
                onClick={handleLogout}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Logout
              </button>


            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-black">
                Login
              </Link>

              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}