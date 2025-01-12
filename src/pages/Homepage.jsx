import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api/apiService";
import LoadingIndicator from "../components/LoadingIndicator";
import ServiceCard from "../components/ServiceHome";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetchData("banner");
        const filteredImages = response.slice(2, 7);
        setImages(filteredImages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="space-y-4 container mx-auto">
      <div className="max-w-full">
        <section className="hero-section relative w-full h-[15rem] sm:h-[15rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem] mt-5">
          {images.length > 0 && (
            <img
              src={images[currentImage].picture}
              alt={images[currentImage].name || "Banner"}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out rounded-custom-br"
            />
          )}
        </section>
        <ServiceCard />
        <div className="w-full h-96 rounded-md overflow-hidden p-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.2786904792183!2d114.18130023967282!3d-8.445050299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3ffa211da2de5%3A0x8ed2a28fe6ab1af3!2sPraktek%20Dokter%20umum%20dr.%20Fills%20Prayoga%20B%20%2B%20Sunat%20Modern%20SUMOD!5e0!3m2!1sid!2sid!4v1733740630123!5m2!1sid!2sid"
            width="100%"
            height="100%"
            className="border-0 rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
