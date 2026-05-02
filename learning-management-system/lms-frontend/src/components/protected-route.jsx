import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export function InstructorRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (user.role !== "instructor") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
