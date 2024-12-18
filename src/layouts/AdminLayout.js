import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex-none lg:flex">
      <Sidebar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
