import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="dark:bg-gray-950 bg-[#f1f2f4] flex flex-col justify-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
