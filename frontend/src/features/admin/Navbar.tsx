const Navbar = () => {
  return (

    <div className="h-[70px] bg-white shadow flex items-center justify-between px-6">

      <h2 className="text-2xl font-semibold">
        Admin Dashboard
      </h2>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>

    </div>
  );
};

export default Navbar;