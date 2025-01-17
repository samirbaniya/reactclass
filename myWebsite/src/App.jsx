import { useEffect } from "react";
import Router from "./mycomponents/Router";
import { DARK_MODE } from "./constants/appConstants";
import { Toaster } from "@/components/ui/toaster";

import "./App.css";
function App() {
  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem(DARK_MODE)) || false;
    const element = document.body;
    if (isDark) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });
  return (
    <div>
      <Toaster />
      <Router />
    </div>
  );
}

export default App;
