// import About from "./pages/About";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          children: [
            { path: "aboutUs", element: <div>ABOUT US*************</div> },
            { path: "aboutMe", element: <div>ABOUT ME-------------</div> },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      element: <Layout />,
    },
  ]);
function RouterDomApp() {
    return <RouterProvider router={router} />;

}

export default RouterDomApp