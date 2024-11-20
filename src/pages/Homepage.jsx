import React, { useState, useEffect } from "react";
import Profil from "./Profil";
import Layanan from "./Layanan"
import Galeri from "./Galeri";
import image1 from "../assets/homapage.jpg";
import image2 from "../assets/hero1.jpg";

const Homepage = () => {
  const images = [image1, image2];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="space-y-4">
      <section className="hero-section">
        <div
          className={`hero-background bg-cover bg-center`}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
      </section>
      <Profil className="profil-content-home" />
      <Layanan className="metode-content-home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"/>
      <Galeri className="metode-content-home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"/>
    </div>
  );
};

export default Homepage;
