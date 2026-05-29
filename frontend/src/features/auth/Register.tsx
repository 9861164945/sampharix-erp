import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [role, setRole] = useState("");

  const [parentId, setParentId] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          role,
          parentId:
            parentId === ""
              ? null
              : Number(parentId),
        }
      );

      console.log(response.data);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Sampharix ERP
        </h1>

        <h2 className="text-xl font-semibold mb-5 text-center">
          Register a new account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleRegister}
        >

          <input
            type="text"
            placeholder="Business Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          >

            <option value="">
              SELECT ROLE
            </option>

            
            <option value="DISTRIBUTOR">
              DISTRIBUTOR
            </option>

            <option value="RETAILER">
              RETAILER
            </option>

          </select>

          <input
            type="number"
            placeholder="Parent ID (Optional)"
            value={parentId}
            onChange={(e) =>
              setParentId(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have account?{" "}
          <Link
            to="/"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;