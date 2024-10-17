import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import Contact from "../../pages/contact/Contact";
import PetDesccription from "../../pages/petDescription/PetDesccription";
import Animals from "../../pages/animals/animals";
import PetCategories from "../../pages/petCategories/petCategories";
import AdoptForm from "../../pages/AdoptForm/AdoptForm";
import Explore from "../../pages/Explore/Explore";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import Recommended from "../../pages/RecommendPage/Recommended";
import Protected from "../protected/Protected";
import About from "../../pages/about/About";
import Recommend from "../../pages/Recommend/Recommend";

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
        element: (
          <Protected>
            <UserProfile />
          </Protected>
        ),
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/recommended",
        element: <Recommended />,
      },
      {
        path: "/recommend",
        element: <Recommend />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
