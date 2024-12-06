/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ThemeContext } from "./useThemeContext";
import { DARK_MODE } from "../constants/appConstants";

export const ThemeContextProvider = ({ children }) => {
  const [isdark, setIsDark] = useState(false);
  function toggleDarkMode(value) {
    const element = document.body;
    setIsDark(value);
    if (value) {
      element.classList.add("dark");
      localStorage.setItem(DARK_MODE, JSON.stringify(value));
    } else {
      element.classList.remove("dark");
      localStorage.setItem(DARK_MODE, JSON.stringify(value));
    }
  }
  useEffect(() => {
    const element = document.body;
    const isDark = localStorage.getItem(DARK_MODE);
    if (isDark === "true") {
      setIsDark(true);
      element.classList.add("dark");
    } else {
      setIsDark(false);
      element.classList.remove("dark");
    }
    return () => {};
  }, []);

  return (
    <ThemeContext.Provider value={{ isdark, setIsDark: toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
