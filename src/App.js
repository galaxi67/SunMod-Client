import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Homepage from "./pages/Homepage";
import Layanan from "./pages/Layanan";
import Metode from "./pages/Metode";
import Artikel from "./pages/Artikel";
import Profil from "./pages/Profil";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import NotFound from "./components/NotFound";

import Dashboard from "./admin/Dashboard";
import AdminArtikel from "./admin/pages/AdminArtikel";
import AdminLayanan from "./admin/pages/AdminLayanan";
import AdminMetode from "./admin/pages/AdminMetode";
import AdminProfil from "./admin/pages/AdminProfil";
import SignIn from "./admin/auth/SignIn";
import SignUp from "./admin/auth/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="metode" element={<Metode />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="profil" element={<Profil />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="kontak" element={<Kontak />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/artikel" element={<AdminArtikel />} />
          <Route path="/admin/layanan" element={<AdminLayanan />} />
          <Route path="/admin/metode" element={<AdminMetode />} />
          <Route path="/admin/profil" element={<AdminProfil />} />
          <Route path="/admin/sighup" element={<SignUp />} />
          <Route path="/admin/sighin" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
