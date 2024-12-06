import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-[#f1f2f4]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
