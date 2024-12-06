import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../../Pages/login/Login";
import EditProduct from "../../01/practice/Admin/EditProduct";
import ManageProducts from "../../01/practice/Admin/ManageProducts";
import Cart from "../../01/practice/carts/Cart";
import Product from "../../01/practice/products/Product";
import SingleProduct from "../../01/practice/products/SingleProduct";
import User from "../../01/practice/users/User";
import FormDemo from "../../02/FormDemo";
import Layout from "../Layout";
import Protected from "../Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
