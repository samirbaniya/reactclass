import { Navigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Protected({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Protected;
