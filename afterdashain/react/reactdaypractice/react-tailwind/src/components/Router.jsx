import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import User from "../pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
