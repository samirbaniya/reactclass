import { Navigate } from "react-router-dom";
import { useAuthContext } from "./Context/useAuthContext";

/* eslint-disable react/prop-types */
function Protected({ children }) {
  const { isloggedin } = useAuthContext();
  if (isloggedin) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Protected;
