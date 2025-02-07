import React, { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { fetchData } from "../admin/api/apiService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LayananHome = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const loadLayanan = async () => {
      setLoading(true);
      try {
        const response = await fetchData("service");
        setServices(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadLayanan();
  }, []);

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="px-0 md:px-2 xl:px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-3 lg:mt-4 xl:mt-6 mb-4 md:mb-4 xl:mb-16">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex justify-center items-start flex-col gap-1 xl:gap-3 "
        >
          <p className="font-bold text-gray-400 text-base md:text-xl xl:text-2xl">Layanan sumod</p>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-custom-black">
            Solusi sunat yang menyeluruh
          </h1>
          <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-3 mt-1 md:mt-2 xl:mt-3">
            <span className=" border border-sumod-bl3 rounded-full px-3 text-custom-black">layanan</span>
            <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">sunat modern</span>
            <span className="border border-sumod-bl3 rounded-full px-3 text-custom-black">professional</span>
            <span className="hidden sm:block border border-sumod-bl3 rounded-full px-3 text-custom-black">nyaman</span>
            <span className="hidden sm:block border border-sumod-bl3 rounded-full px-3 text-custom-black">
              terpercaya
            </span>
            <span className="hidden lg:block border border-sumod-bl3 rounded-full px-3 text-custom-black">terbaik</span>
            <span className="hidden lg:block border border-sumod-bl3 rounded-full px-3 text-custom-black">
              tidak sakit
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <a
              href="/layanan"
              className="text-sumod-bl3 text-base md:text-xl lg:text-2xl font-medium flex items-center mt-1 md:mt-2 xl:mt-3"
            >
              Lihat semua paket sunat
              <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 ml-2 text-red-500 animate-move-x" />
            </a>
            {swiperInstance && (
              <div className="relative flex gap-4 justify-center py-4 px-4 items-center">
                <button
                  onClick={() => swiperInstance.slidePrev()}
                  className="border border-sumod-bl3 p-2 rounded-full text-gray-800 hover:bg-sumod-bl3 hover:text-white hidden sm:flex"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperInstance.slideNext()}
                  className=" border border-sumod-bl3 p-2 rounded-full text-gray-800 hover:bg-sumod-bl3 hover:text-white hidden sm:flex"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          className="relative flex gap-6 overflow-x-auto no-scrollbar"
        >
          <Swiper
            onSwiper={handleSwiper}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            loopedSlides={services.length}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="py-6"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="flex-shrink-0 w-[200px] sm:w-[300px] lg:w-[350px] p-3 lg:p-3 xl:p-5 bg-white border-2 shadow-custom hover:shadow-none hover:border-sumod-bl3 duration-500 rounded-xl overflow-hidden"
              >
                {service.picture && (
                  <div className="flex flex-col gap-2 w-full mb-4">
                    <img
                      src={service.picture}
                      alt={service.name}
                      className="w-full h-full object-contain max-w-[120px] mx-auto hidden sm:block"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center text-gray-800">
                  <h1 className="text-base md:text-lg lg:text-2xl font-extrabold text-custom-black tracking-wide mb-2 text-center">
                    {service.name}
                  </h1>
                  <h2 className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed mb-4 text-center">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LayananHome;
