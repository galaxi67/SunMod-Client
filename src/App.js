import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layanan from "./pages/Layanan";
import Metode from "./pages/Metode";
import Artikel from "./pages/Artikel";
import Profil from "./pages/Profil";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import WhatsAppIcon from "./components/WhatsApp";
import "./index.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage title="Homepage" />} />
        <Route path="/Layanan" element={<Layanan title="Services" />} />
        <Route path="/Metode" element={<Metode title="Login Page" description="Methods" />} />
        <Route path="/Artikel" element={<Artikel title="Artikel" description="Article" />} />
        <Route path="/Profil" element={<Profil title="Profile" />} />
        <Route path="/Galeri" element={<Galeri title="Galery" />} />
        <Route path="/Kontak" element={<Kontak title="Contact" />} />
      </Routes>
      <Footer />
      <WhatsAppIcon/>
    </Router>
  );
}

export default App;
