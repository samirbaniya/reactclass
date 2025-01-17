/* eslint-disable react/prop-types */
import useAuthStore from "@/store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ children }) {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/loginForm?redirect=" + location.pathname} />;
  }
}

export default Protected;
