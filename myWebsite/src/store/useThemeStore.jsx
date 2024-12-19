import { create } from "zustand";
import { DARK_MODE } from "../constants/appConstants";

const useThemeStore = create((set) => ({
  isDark: JSON.parse(localStorage.getItem(DARK_MODE)) || false,
  setIsDark: (value) => {
    const element = document.body;
    set((state) => {
      const newDarkMode = value;
      localStorage.setItem(DARK_MODE, JSON.stringify(newDarkMode));
      if (newDarkMode) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
      return { isDark: newDarkMode };
    });
  },
}));

export default useThemeStore;
