import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/Sidebar";

const AdminLayout = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[320px_auto]">
    <aside>
      <Sidebar />
    </aside>

    <main className="">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
