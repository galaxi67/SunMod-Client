import React, { useState } from "react";
import Logo from "../assets/logo-sumot.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar flex justify-between items-center w-full max-w-screen-2xl mx-auto mt-5">
        <div className="navbar-logo text-lg font-bold text-black ml-5">
          <a href="/">
            <img src={Logo} alt="SunMod Logo" className="h-10 md:h-16 w-auto text-[2rem]" />
          </a>
        </div>

        <div
          className={`z-50 navbar-menu absolute md:relative top-16 md:top-auto right-0 bg-white md:bg-transparent w-full md:w-auto p-5 md:p-0 shadow-md md:shadow-none lg:p-3 lg:px-10 rounded-sm shadow-transparent md:space-x-4 lg:space-x-6 xl:space-x-9 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <a
            href="/"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Home
          </a>
          <a
            href="/Layanan"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Layanan" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Layanan
          </a>
          <a
            href="/Metode"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Metode" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Metode
          </a>
          <a
            href="/Profil"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Profil" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Profil
          </a>
          <a
            href="/Artikel"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Artikel" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Artikel
          </a>
          <a
            href="/Galeri"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Galeri" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Galeri
          </a>
          <a
            href="/Kontak"
            className={`navbar-menu-item block md:inline-block text-custom-black hover:text-custom-blue transition duration-300 text-base md:text-lg lg:text-2xl ${
              window.location.pathname === "/Kontak" ? "text-custom-blue" : "text-custom-black"
            }`}
          >
            Kontak
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle md:hidden text-gray-800"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
