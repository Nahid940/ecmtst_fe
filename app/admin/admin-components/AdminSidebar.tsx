import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-yellow-300 text-black min-h-screen p-6">

      <h2 className="text-xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">

        <Link href="/admin">Dashboard</Link>

        <Link href="/admin/products">
          Products
        </Link>

        <Link href="/admin/orders">
          Orders
        </Link>

        <Link href="/admin/users">
          Users
        </Link>

      </nav>

    </aside>
  );
}