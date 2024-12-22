import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";


const AdminLayout = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[300px_auto] min-h-screen">
    <aside>
      <Sidebar />
    </aside>

    <main className="flex justify-center items-center">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
