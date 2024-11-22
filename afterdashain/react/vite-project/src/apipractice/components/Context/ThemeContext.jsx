/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const light = {
    backgroundColor: "white",
    color: "black",
  };
  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  const red = {
    backgroundColor: "#ff4d4d",
    color: "white",
  };
  const purple = {
    backgroundColor: "#800080",
    color: "#ffff00",
  };
  const defaulttheme = {
    backgroundColor: "#343536",
    color: "aliceblue",
  };
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const themeValue = JSON.parse(localStorage.getItem("theme"));
    setTheme(themeValue);
    return () => {};
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, dark, light, purple, red, defaulttheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
