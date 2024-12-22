import React, { useState, useEffect } from "react";
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
      <div className="space-y-4 container max-w-full">
        <section className="hero-section relative w-full h-[15rem] sm:h-[15rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem] mt-5">
          <div
            className={`hero-background bg-cover bg-center absolute inset-0 transition-all duration-1000 ease-in-out rounded-custom-br`}
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          ></div>
        </section>
        
      </div>
  );
};

export default Homepage;
