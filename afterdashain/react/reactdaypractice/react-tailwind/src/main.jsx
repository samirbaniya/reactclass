import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./practice/ThemeContextProvider.jsx";
// import DarkModeToggle from "./practice/DarkModeToggle.jsx";
import { AuthContextProvider } from "./context/Authcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        {/* <DarkModeToggle /> */}
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
