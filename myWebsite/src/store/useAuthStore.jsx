import { create } from "zustand";

const isLoggedInInit = !!localStorage.getItem("token");
const tokenInit = localStorage.getItem("token");

const useAuthStore = create((set) => ({
  token: tokenInit,
  isLoggedIn: isLoggedInInit,

  logout: () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      localStorage.removeItem("token");
      set({ isLoggedIn: false });
      alert("Logged out");
    }
  },
}));

export default useAuthStore;
