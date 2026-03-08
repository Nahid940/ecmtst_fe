import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-yellow-300 border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-xl font-bold text-gray-800">
          BuyMe
        </Link>

        <div className="flex items-center gap-6 text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/login" className="hover:text-black">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}