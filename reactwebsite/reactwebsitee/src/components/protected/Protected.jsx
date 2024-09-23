/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function Protected(props) {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/Login"} />;
  } else {
    return <>{props.children}</>;
  }
}

export default Protected;
