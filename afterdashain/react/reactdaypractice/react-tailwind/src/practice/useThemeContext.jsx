import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
