import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./practice/ThemeContextProvider.jsx";
// import DarkModeToggle from "./practice/DarkModeToggle.jsx";
import { AuthContextProvider } from "./context/Authcontext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AuthContextProvider>
          {/* <DarkModeToggle /> */}
          <App />
        </AuthContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
