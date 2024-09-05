import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import PetDesccription from "../../pages/petDescription/PetDesccription";
import Animals from "../../pages/animals/animals";

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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals/:id",
        element: <PetDesccription />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
