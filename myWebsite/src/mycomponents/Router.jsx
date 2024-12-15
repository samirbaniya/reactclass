import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
// import Products from "../pages/Products";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import User from "../pages/User";
import LoginForm from "../pages/LoginForm";
import Home from "@/pages/Home";
import ProductDescription from "@/pages/ProductDescription";
import AddProducts from "@/pages/adminpages/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Products />,
      // },
      // {
      //   path: "/products",
      //   element: <Products />,
      // },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <ProductDescription />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginForm",
    element: <LoginForm />,
  },
  {
    path: "/addProducts",
    element: <AddProducts />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
