import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import { Navigate } from "react-router";
export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={"/user"} />;
  }
  return children;
}
