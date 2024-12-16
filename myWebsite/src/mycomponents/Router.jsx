import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import User from "../pages/User";
import LoginForm from "../pages/LoginForm";
import Home from "@/pages/Home";
import ProductDescription from "@/pages/ProductDescription";
import AddProducts from "@/pages/adminpages/AddProducts";
import AdminLayout from "./AdminLayout";
import EditProduct from "@/pages/adminpages/EditProduct";
import AdminDashBoard from "@/pages/adminpages/AdminDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashBoard />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashBoard />,
      },
      {
        path: "/admin/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/admin/editproduct",
        element: <EditProduct />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
