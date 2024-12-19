/* eslint-disable react/prop-types */
import useAuthStore from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { isLoggedIn } = useAuthStore();

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to="/loginForm" />;
  }
}

export default Protected;
