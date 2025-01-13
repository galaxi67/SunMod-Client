import React from "react";
import Wa from "../assets/social.png"
import Ig from "../assets/instagram.png"

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="footer-top flex justify-center items-center space-x-4 h-28 -mb-6">
          <a href="tel:+6281313138870" className="footer-icon">
            <img src={Wa} alt="Phone Icon" className="h-8 w-8 opacity-50" />
          </a>
          <a href="https://instagram.com/sumod.sunatmodern" className="footer-icon">
            <img src={Ig} alt="Instagram Icon" className="h-8 w-8 opacity-50" />
          </a>
        </div>
        <div className="footer-bottom flex flex-wrap items-center justify-center w-full">
          <div className="footer-bottom-text flex justify-center items-center text-sm font-semibold text-slate-400 mb-5 mt-3">
            <p>© 2024 Sunat Modern</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
