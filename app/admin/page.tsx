export default function AdminDashboard() {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-lg">Products</h2>
          <p className="text-2xl font-bold">20</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-lg">Orders</h2>
          <p className="text-2xl font-bold">15</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-lg">Users</h2>
          <p className="text-2xl font-bold">10</p>
        </div>

      </div>

    </div>
  );

}