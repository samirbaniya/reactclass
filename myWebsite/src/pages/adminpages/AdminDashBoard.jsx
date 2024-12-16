import { Component } from "@/mycomponents/BarChart";

function AdminDashBoard() {
  return (
    <div className="flex flex-col justify-center items-center">
      Admin DashBoard
      <div className="border border-slate-200 rounded-md ml-3 mt-5 p-10">
        <Component />
      </div>
    </div>
  );
}

export default AdminDashBoard;
