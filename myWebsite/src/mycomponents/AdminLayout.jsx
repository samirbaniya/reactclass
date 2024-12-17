import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

function AdminLayout() {
  return (
    <div className="flex w-screen">
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
