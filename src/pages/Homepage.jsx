import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api/apiService";
import LoadingIndicator from "../components/LoadingIndicator";
import ServiceCard from "../components/ServiceHome";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [methods, setMethods] = useState([]);
  const [services, setServices] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          fetchData("banner"),
          fetchData("method"),
          fetchData("service"),
          fetchData("article"),
        ]);
        const filteredImages = response1.slice(2, 7);
        setMethods(response2);
        setServices(response3);
        setArticles(response4);
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
        <section className="hero-section relative w-full h-[15rem] sm:h-[15rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem]">
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
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-custom-black">Solusi tepat dengan metode handal</h1>
            <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
              <span className="border-2 border-sumod-bl3 rounded-full px-3 text-custom-black">metode</span>
              <span className="border-2 border-custom-yellow rounded-full px-3 text-custom-black">sumod</span>
              <span className="border-2 border-custom-orange rounded-full px-3 text-custom-black">sunat modern</span>
            </div>
          </div>

          <div className="flex justify-center md:order-1">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-2 md:p-3 lg:p-6 xl:px-24">
              {methods.map((method, index) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          <div className="flex justify-center items-start flex-col gap-1 xl:gap-3">
            <p className="font-bold text-gray-400 text-base md:text-xl xl:text-2xl">Layanan sumod</p>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-custom-black">Solusi sunat yang menyeluruh</h1>
            <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
              <span className="border-2 border-sumod-bl3 rounded-full px-3 text-custom-black">layanan</span>
              <span className="border-2 border-custom-yellow rounded-full px-3 text-custom-black">sunat modern</span>
              <span className="border-2 border-sumod-bl rounded-full px-3 text-custom-black">nyaman</span>
              <span className="border-2 border-custom-orange rounded-full px-3 text-custom-black">terpercaya</span>
              <span className="border-2 border-sumod-bl4 rounded-full px-3 text-custom-black">professional</span>
              <span className="border-2 border-sidebar rounded-full px-3 text-custom-black">terbaik</span>
              <span className="border-2 border-custom-pink rounded-full px-3 text-custom-black">tidak sakit</span>
            </div>
          </div>
          <div className="relative py-4">
            <div className="flex gap-6 overflow-x-auto">
              {Array.isArray(services) &&
                services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[200px] sm:w-[300px] lg:w-[350px] p-3 lg:p-3 xl:p-5 bg-white border-2 shadow-custom hover:shadow-none hover:border-sumod-bl3 duration-500 rounded-xl overflow-hidden"
                  >
                    {service.picture && (
                      <div className="flex flex-col gap-2 w-full">
                        <img
                          src={service.picture}
                          alt={service.name}
                          className="w-full h-full object-contain max-w-[200px] mx-auto hidden sm:block"
                        />
                      </div>
                    )}

                    <div className="flex flex-col justify-center text-gray-800">
                      <h1 className="text-base md:text-lg lg:text-2xl font-extrabold text-custom-black tracking-wide mb-2 text-center md:text-start">
                        {service.name}
                      </h1>
                      <h2 className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed mb-4 text-balance lg:text-start">
                        {service.description}
                      </h2>

                      <div className="mt-2 md:mt-3 lg:mt-6">
                        <a href="/layanan" rel="noopener noreferrer">
                          <button
                            type="button"
                            className="w-full py-3 bg-sumod-bl3 text-white font-bold rounded-lg shadow-md hover:bg-custom-blue duration-500 transition-all"
                          >
                            Lihat Paket Layanan
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto rounded-custom-br">
          <div className="flex justify-center items-start md:items-center flex-col gap-1 xl:gap-3 mb-5">
            <h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-custom-black">Artikel Kesehatan Sumod</h1>
            <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
              <span className="border-2 border-sumod-bl3 rounded-full px-3 text-custom-black">kesehatan</span>
              <span className="border-2 border-custom-yellow rounded-full px-3 text-custom-black">berita</span>
              <span className="border-2 border-custom-pink rounded-full px-3 text-custom-black">hidup sehat</span>
              <span className="border-2 border-custom-orange rounded-full px-3 text-custom-black">artikel</span>
              <span className="border-2 border-sumod-bl4 rounded-full px-3 text-custom-black">sunat modern</span>
            </div>
          </div>
          <div className="relative flex gap-3 overflow-x-auto">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white border shadow-custom rounded-custom-br overflow-hidden flex-none w-[120px] sm:w-[350px] md:w-[200px] lg:w-[250px]"
              >
                <img
                  src={article.picture}
                  alt={article.name}
                  className="w-full h-24 sm:h-20 lg:h-52 object-cover object-center"
                />
                <div className="p-1 md:p-2 lg:p-3">
                  <p className="text-xs text-gray-500 mt-3">{new Date(article.createdAt).toLocaleDateString()}</p>
                  <h2 className="text-sm md:text-xl lg:text-xl font-medium text-gray-800 leading-tight  line-clamp-2 md:line-clamp-none">
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
