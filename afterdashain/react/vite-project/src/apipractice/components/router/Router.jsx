import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Product from "../../01/practice/products/Product";
import Cart from "../../01/practice/carts/Cart";
import User from "../../01/practice/users/User";
import SingleProduct from "../../01/practice/products/SingleProduct";
import FormDemo from "../../02/FormDemo";
import Login from "../../../Pages/login/Login";
import Protected from "../Protected";
import ManageProducts from "../../01/practice/Admin/ManageProducts";
import EditProduct from "../../01/practice/Admin/EditProduct";

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
        element: (
          <Protected>
            <Cart />
          </Protected>
        ),
      },
      {
        path: "/Users",
        element: (
          <Protected>
            <User />
          </Protected>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <Protected>
            <SingleProduct />
          </Protected>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <Protected>
            <EditProduct />
          </Protected>
        ),
      },
      {
        path: "/form",
        element: <FormDemo />,
      },
      {
        path: "/admin/products",
        element: (
          <Protected>
            <ManageProducts />
          </Protected>
        ),
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
