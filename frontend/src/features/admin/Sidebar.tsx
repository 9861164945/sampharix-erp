const Sidebar = () => {
  return (

    <div className="w-[250px] h-screen bg-blue-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        PharmaNex ERP
      </h1>

      <ul className="space-y-5">

        <li className="hover:text-gray-300 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Users
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;