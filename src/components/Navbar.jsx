import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">SunMod</a>
        </div>

        <div className={`navbar-menu ${isOpen ? "block" : "hidden"}`}>
          <a href="/" className="navbar-menu-item">
            Home
          </a>
          <a href="/Layanan" className="navbar-menu-item">
            Layanan
          </a>
          <a href="/Metode" className="navbar-menu-item">
            Metode
          </a>
          <a href="/Profil" className="navbar-menu-item">
            Profil
          </a>
          <a href="/Artikel" className="navbar-menu-item">
            Artikel
          </a>
          <a href="/Galeri" className="navbar-menu-item">
            Galeri
          </a>
          <a href="/Kontak" className="navbar-menu-item">
            Kontak
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle" title="Open menu">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="navbar-toggle-icon"
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
              className="navbar-toggle-icon"
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
