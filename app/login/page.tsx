export default function LoginPage() {

  return (
    <div className="flex justify-center items-center min-h-[70vh]">

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl text-green-500 font-bold mb-6 text-center">
          Login to Your Account
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded  border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600 cursor-pointer"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );

}