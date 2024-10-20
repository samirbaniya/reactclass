import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Dog from "../../pages/dog/Dog";
import Cat from "../../pages/cat/Cat";
import Jokes from "../../pages/jokes/Jokes";
import Bird from "../../pages/bird/Bird";
import RedPanda from "../../pages/RedPanda/RedPanda";
import Photos from "../../pages/photos/Photos";
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
        path: "/dogs",
        element: <Dog />,
      },
      {
        path: "/cats",
        element: <Cat />,
      },
      {
        path: "/jokes",
        element: <Jokes />,
      },
      {
        path: "/birds",
        element: <Bird />,
      },
      {
        path: "/RedPanda",
        element: <RedPanda />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
