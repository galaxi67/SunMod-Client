import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  BriefcaseIcon,
  CogIcon,
  IdentificationIcon,
  NewspaperIcon,
  ClipboardDocumentIcon
} from "@heroicons/react/24/outline";

const Sidebar = ({ brandName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/admin", name: "Dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { path: "layanan", name: "Layanan", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { path: "metode", name: "Metode", icon: <ClipboardDocumentIcon className="h-5 w-5" /> },
    { path: "profil", name: "Profil", icon: <IdentificationIcon className="h-5 w-5" /> },
    { path: "artikel", name: "Artikel", icon: <NewspaperIcon className="h-5 w-5" /> },
    { path: "setting", name: "Setelan Akun", icon: <CogIcon className="h-5 w-5 opacity-50" /> },
  ];

  return (
    <div className="bg-sidebar lg:h-screen lg:fixed">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 lg:w-80 bg-sidebar text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:static lg:transform-none`}
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-gray-700">
          <h1 className="text-3xl font-bold">{brandName}</h1>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="p-4 mt-10 font-light lg:text-xl tracking-widest">
          <ul className="space-y-2">
            {routes.map(({ path, name, icon }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-lg transition-colors ${
                      isActive && path !== "/admin" && name !== "Setelan Akun"? "bg-orange-400 text-white" : "hover:bg-gray-700 text-white"
                    } ${name === "Setelan Akun" ? "opacity-50" : ""}`
                  }
                >
                  {icon}
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between bg-sidebar text-white p-4 lg:hidden">
          <h1 className="text-lg font-bold">{brandName}</h1>
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </header>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  brandName: "Sunat Modern",
};

export default Sidebar;
