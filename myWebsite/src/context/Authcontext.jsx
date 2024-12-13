/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    return () => {};
  }, []);
  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out");
  }
  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
