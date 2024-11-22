import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const value = useContext(ThemeContext);
  return value;
};
