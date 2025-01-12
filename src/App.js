import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import ProtectedRoute from "./admin/auth/ProtectedRoute"
import React, { useEffect } from "react"
import PublicLayout from "./layouts/PublicLayout"
import AdminLayout from "./layouts/AdminLayout"

import Homepage from "./pages/Homepage"
import Layanan from "./pages/Layanan"
import Metode from "./pages/Metode"
import Artikel from "./pages/Artikel"
import ArtikelDetail from './components/BlogDetail'
import Profil from "./pages/Profil"
import Galeri from "./pages/Galeri"
import Kontak from "./pages/Kontak"
import NotFound from "./components/NotFound"

import AdminDashboard from "./admin/pages/AdminDashboard"
import AdminArtikel from "./admin/pages/AdminArtikel"
import AdminLayanan from "./admin/pages/AdminLayanan"
import AdminMetode from "./admin/pages/AdminMetode"
import AdminProfil from "./admin/pages/AdminProfil"
import Setting from "./admin/pages/settings"
import SignIn from "./admin/auth/SignIn"
import { ToastContainer } from "react-toastify"
import { setupAxiosInterceptors } from "./admin/api/axiosInstance"

const AppWrapper = () => {
    const navigate = useNavigate()

    useEffect( () => {
        setupAxiosInterceptors( navigate )
    }, [navigate] )

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="layanan" element={<Layanan />} />
                    <Route path="metode" element={<Metode />} />
                    <Route path="artikel" element={<Artikel />} />
                    <Route path="artikel/detail/:id" element={<ArtikelDetail/>} />
                    <Route path="profil" element={<Profil />} />
                    <Route path="galeri" element={<Galeri />} />
                    <Route path="kontak" element={<Kontak />} />
                </Route>

                <Route path="/signin" element={<SignIn />} />

                <Route path="/admin" element={<ProtectedRoute />}>
                    <Route path="/admin/" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="profil" element={<AdminProfil />} />
                        <Route path="artikel" element={<AdminArtikel />} />
                        <Route path="layanan" element={<AdminLayanan />} />
                        <Route path="metode" element={<AdminMetode />} />
                        <Route path="setting" element={<Setting />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    )
}

export default App
