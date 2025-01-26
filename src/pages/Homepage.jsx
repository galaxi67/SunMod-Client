import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api/apiService";
import LoadingIndicator from "../components/LoadingIndicator";
import ServiceCard from "../components/ServiceHome";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";
import Galeri from "../components/InstagramFeed";
import Layanan from "../components/LayananHome";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [methods, setMethods] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const [response1, response2, response3] = await Promise.all([
          fetchData("banner"),
          fetchData("method"),
          fetchData("article"),
        ]);
        const filteredImages = response1.slice(2, 7);
        setMethods(response2);
        setArticles(response3);
        setImages(filteredImages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const mainArticles = articles.slice(currentIndex, currentIndex + 2);
  const thumbnailArticles = articles.filter((article, index) => index < currentIndex || index >= currentIndex + 2);
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

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
    <div className="container mx-auto">
      <div className="max-w-full">
        <section className="mt-3 sm:mt-5 lg:mt-15 hero-section relative w-full h-[15rem] sm:h-[15rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem]">
          {images.length > 0 && (
            <img
              src={images[currentImage].picture}
              alt={images[currentImage].name || "Banner"}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out rounded-custom-br"
            />
          )}
        </section>

        <ServiceCard />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-start md:order-2 flex-col gap-1 xl:gap-3">
            <p className="font-bold text-gray-400 text-base md:text-xl xl:text-2xl">Metode sumod</p>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-custom-black">
              Solusi tepat dengan metode handal
            </h1>
            <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">metode</span>
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">sumod</span>
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">
                sunat modern
              </span>
            </div>
            <a
              href="/layanan"
              className="text-sumod-bl3 text-base md:text-xl lg:text-2xl font-medium flex items-center mt-1 md:mt-2 xl:mt-3"
            >
              Lihat metode sunat modern
              <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 ml-2 text-custom-yellow animate-move-x" />
            </a>
          </div>

          <div className="flex justify-center md:order-1">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-2 md:p-3 lg:p-6 xl:px-24">
              {methods.slice(0, 4).map((method, index) => (
                <a
                  key={index}
                  href="/metode"
                  className="bg-slate-50 rounded-custom-br overflow-hidden p-3 aspect-square shadow-md hover:border-custom-yellow hover:border-2 hover:shadow-none duration-500 transition ease-in-out"
                >
                  <img src={method.picture} alt={method.name} className="w-full h-full object-contain cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Layanan />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-10 lg:mt-14 xl:mt-16">
          <div className="flex justify-center ml-0 md:ml-4 lg:ml-10 xl:ml-12 items-start md:order-2 flex-col gap-1 xl:gap-3">
            <p className="font-bold text-gray-400 text-base md:text-xl xl:text-2xl">Artikel sumod</p>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-custom-black">
              Kesehatan adalah segalanya
            </h1>
            <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">kesehatan</span>
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">
                berita
              </span>
              <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">
                hidup sehat
              </span>
              <span className="hidden sm:block border border-sumod-bl3 rounded-full px-3 text-custom-black">
                artikel
              </span>
              <span className="hidden sm:block border border-sumod-bl3 rounded-full px-3 text-custom-black">
                sunat modern
              </span>
            </div>
            <div className="flex gap-1 md:gap-2 lg:gap-4 mt-2 xl:mt-3">
              {thumbnailArticles.slice(0, 4).map((article) => (
                <button
                  key={article.id}
                  onClick={() => handleThumbnailClick(articles.indexOf(article))}
                  className="flex-shrink-0 w-10 h-10 lg:w-16 lg:h-16 border-2 rounded-full md:rounded-custom-br overflow-hidden border-gray-300 hover:border-blue-500"
                  aria-label={`Lihat artikel ${article.name}`}
                >
                  <img src={article.picture} alt={article.name} className="w-full h-full object-cover object-center" />
                </button>
              ))}
              <a href="/artikel" className="flex items-center border-0 lg:border-2 rounded-full">
                <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 ml-2 text-sumod-bl3 animate-move-x" />
              </a>
            </div>
          </div>

          <div className="relative flex flex-col md:order-1 items-center mt-3">
            <div className="grid grid-cols-2 gap-1 md:gap-4">
              {mainArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 w-full p-1  md:p-3 bg-white border-2 shadow-custom hover:shadow-none hover:border-sumod-bl3 duration-500 rounded-xl overflow-hidden"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <img
                      src={article.picture}
                      alt={article.name}
                      className="w-full h-24 sm:h-20 lg:h-52 object-cover object-center rounded-custom-br"
                    />
                  </div>

                  <div className="p-1 md:p-2 lg:p-3">
                    <p className="text-xs text-gray-500 mt-3">{new Date(article.createdAt).toLocaleDateString()}</p>
                    <h2 className="text-sm md:text-xl lg:text-xl font-medium text-gray-800 leading-tight line-clamp-1">
                      {article.name}
                    </h2>
                    <div className="mt-1 md:mt-2">
                      <a
                        href={`artikel/detail/${article.id}`}
                        className="text-blue-600 font-normal text-xs md:text-sm lg:text-base hover:underline transition-all duration-200"
                      >
                        Baca Selengkapnya →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-10 lg:mt-14 xl:mt-16 border-sumod-bl3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 px-0 md:px-8">
            <h1 className="text-4xl lg:text-6xl font-serif text-custom-black">
              Galeri <br />
              Sunat Modern
            </h1>
            <a
              href="https://instagram.com/sumod.sunatmodern"
              className="flex items-center justify-start md:justify-center space-x-2 border-0 md:border border-sumod-bl3 rounded-custom-br"
            >
              <FaInstagram className="h-8 w-8 text-red-500" />
              <h1 className="text-4xl font-serif text-custom-black text-end">sumod.sunatmodern</h1>
            </a>
          </div>
          <div className="hidden sm:block">
            <Galeri maxPosts={3} />
          </div>
          <div className="block sm:hidden">
            <Galeri maxPosts={1} />
          </div>
        </div>

        <div className="grid grid-row-2 p-4 lg:p-6 mt-4">
          <div className="flex justify-center">
            <p className="text-slate-600 border-y-2 border-slate-300 text-center py-2 px-4 tracking-wider text-sm md:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-6">
              KEMITRAAN KAMI
            </p>
          </div>

          <div className="flex flex-row gap-6 justify-center items-center">
            <img
              src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190488/assets/n2jrykja50vssz463s5o.png"
              alt="Logo OSI"
              className="w-[80px] md:w-[150px] lg:w-[200px] xl:w-[250px] h-auto mx-auto"
            />
            <img
              src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736193440/assets/elbj6oojznoybz0hon9n.png"
              alt="Logo ASDOKI"
              className="w-[120px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-auto mx-auto"
            />
          </div>
        </div>

        <div className="mt-5 w-full h-52 md:h-60 xl:h-96 rounded-md overflow-hidden">
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
