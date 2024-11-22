import { useContext } from "react";
import { AuthContext } from "./Authcontext";

export const useAuthContext = () => {
  const value = useContext(AuthContext);
  return value;
};
