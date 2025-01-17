import { create } from "zustand";

const isLoggedInInit = !!localStorage.getItem("token");
const tokenInit = localStorage.getItem("token");

const useAuthStore = create((set) => {
  return {
    token: tokenInit,
    isLoggedIn: isLoggedInInit,
    loginStore: (value) => {
      if (value) {
        localStorage.setItem("token", value);
        set({ isLoggedIn: true, token: value });
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      set({ isLoggedIn: false });
    },
  };
});

export default useAuthStore;
