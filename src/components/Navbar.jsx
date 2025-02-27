import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header lg:mt-4 lg:mb-8 container mx-auto">
      <nav className="navbar flex justify-between items-center w-full max-w-screen-2xl mx-auto mt-5 p-2 md:p-0 bg-sumod-bl rounded-2xl md:bg-white">
        <div className="navbar-logo text-lg font-bold text-black lg:ml-5">
          <a href="/">
            <div className="bg-white p-2 md:p-0 rounded-full">
              <img
                src="https://res.cloudinary.com/dtpxp4yjv/image/upload/v1734639559/products/jg5remlsiqixehj38tp0.png"
                alt="SunMod Logo"
                className="h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 w-auto"
              />
            </div>
          </a>
        </div>

        <div className="rounded-2xl h-10 md:h-12 lg:h-14 xl:h-16 flex items-center">
          <div
            className={`z-50 navbar-menu absolute md:relative top-24 sm:top-28 text-center md:top-auto right-0 bg-white md:bg-transparent w-full md:w-auto shadow-md md:shadow-none md:px-8 lg:px-10 rounded-2xl shadow-transparent md:space-x-4 lg:space-x-6 xl:space-x-9 ${
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
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle md:hidden text-white">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
              className="h-8 w-8"
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
