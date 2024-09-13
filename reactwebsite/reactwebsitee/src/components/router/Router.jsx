import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import PetDesccription from "../../pages/petDescription/PetDesccription";
import Animals from "../../pages/animals/animals";
import PetCategories from "../../pages/petCategories/petCategories";
import AdoptForm from "../../pages/AdoptForm/AdoptForm";
import Explore from "../../pages/Explore/Explore";
import UserProfile from "../../pages/UserProfile/UserProfile";

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
        path: "/categories/:category",
        element: <PetCategories />,
      },
      {
        path: "/adopt/:id",
        element: <AdoptForm />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
