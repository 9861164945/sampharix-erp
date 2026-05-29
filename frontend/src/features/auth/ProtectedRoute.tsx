import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  allowedRole: string;
};

const ProtectedRoute = ({
  children,
  allowedRole,
}: Props) => {

  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  // If not logged in
  if (!token) {

    return <Navigate to="/" />;

  }

  // If wrong role
  if (role !== allowedRole) {

    return <Navigate to="/" />;

  }

  return children;
};

export default ProtectedRoute;