import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

function AdminLayout() {
  return (
    <div className="flex">
      <AppSidebar />
      <div>
        <SidebarTrigger />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
