import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "../../../components/Layout";
import About from "../../../pages/About";
import Contact from "../../../pages/Contact";
import Homee from "./Homee";
import AboutDesc from "./AboutDesc";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homee />} />
      <Route path="home" element={<Homee />} />
      <Route path="about" element={<About />}>
        <Route path=":id" element={<AboutDesc/>} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function RoutingAnotherWay() {
  return <RouterProvider router={router} />;
}

export default RoutingAnotherWay;
