import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 py-2 px-4 bg-slate-600 text-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-300 ${
        showButton ? "opacity-35" : "opacity-0 pointer-events-none"
      }`}
      style={{ transitionDelay: "0.3s" }}
    >
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  );
};

export default ScrollTop;
