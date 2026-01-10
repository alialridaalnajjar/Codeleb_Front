import { Navigate, Outlet } from "react-router-dom";
import useAuthCookies from "./UseAuth";

export default function AdminRedirectRoute() {
  const { isAuthenticated, getDecodedToken } = useAuthCookies();
  const id = getDecodedToken()?.userId;
  const temp = getDecodedToken()?.role;
  if (temp?.toLowerCase() !== "admin") return <Navigate to="/" replace />;
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/admin/${id}`} replace />
  );
}
