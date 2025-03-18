import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/PracticeLogin";
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
import SearchResult from "@/pages/SearchResult";
import AllProducts from "@/pages/adminpages/AllProducts";
import Protected from "./Protected";
import Checkout from "@/pages/Checkout";
import AllUser from "@/pages/adminpages/AllUser";
import Advertisements from "@/pages/adminpages/Advertisements";
import BannerManagement from "@/pages/adminpages/BannerManagement";

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
      {
        path: "/checkout",
        element: (
          <Protected>
            <Checkout />
          </Protected>
        ),
      },
      {
        path: "/searchresult/:search",
        element: <SearchResult />,
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
    element: (
      <Protected>
        <AdminLayout />
      </Protected>
    ),
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
        path: "/admin/editproduct/:id",
        element: <EditProduct />,
      },
      {
        path: "/admin/products",
        element: <AllProducts />,
      },
      {
        path: "/admin/allusers",
        element: <AllUser />,
      },
      {
        path: "/admin/addadvertisements",
        element: <Advertisements />,
      },
      {
        path: "/admin/BannerManagement",
        element: <BannerManagement />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
