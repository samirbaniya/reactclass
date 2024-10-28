import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Product from "../../01/practice/products/Product";
import Cart from "../../01/practice/carts/Cart";
import User from "../../01/practice/users/User";
import SingleProduct from "../../01/practice/products/SingleProduct";
import FormDemo from "../../02/FormDemo";
import Login from "../../../Pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{ height: "100vh" }}>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/Products",
        element: <Product />,
      },
      {
        path: "/Carts",
        element: <Cart />,
      },
      {
        path: "/Users",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/form",
        element: <FormDemo />,
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
