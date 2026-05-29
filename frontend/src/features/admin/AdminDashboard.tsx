import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Distributor One",
    email: "dist@gmail.com",
    role: "DISTRIBUTOR",
  },
  {
    id: 3,
    name: "Retailer One",
    email: "retailer@gmail.com",
    role: "RETAILER",
  },
];

const AdminDashboard = () => {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Registered Users
            </h2>

            <table className="w-full border">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-3 border">
                    ID
                  </th>

                  <th className="p-3 border">
                    Name
                  </th>

                  <th className="p-3 border">
                    Email
                  </th>

                  <th className="p-3 border">
                    Role
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user) => (

                  <tr
                    key={user.id}
                    className="text-center"
                  >

                    <td className="p-3 border">
                      {user.id}
                    </td>

                    <td className="p-3 border">
                      {user.name}
                    </td>

                    <td className="p-3 border">
                      {user.email}
                    </td>

                    <td className="p-3 border">
                      {user.role}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;