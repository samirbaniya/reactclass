import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Product from "../../01/practice/products/Product";
import Cart from "../../01/practice/carts/Cart";
import User from "../../01/practice/users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
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
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
