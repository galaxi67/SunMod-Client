import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  UserIcon,
  ShieldCheckIcon,
  ClipboardDocumentIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    id: 1,
    title: "Sunat Anak",
    description: "Layanan sunat untuk anak dengan metode modern dan minim rasa sakit.",
    icon: <UserIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 2,
    title: "Sunat Dewasa",
    description: "Proses sunat yang aman dan nyaman untuk usia dewasa.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 3,
    title: "Sunat Khusus",
    description: "Sunat khusus untuk individu dengan kondisi kesehatan atau kebutuhan medis tertentu.",
    icon: <ClipboardDocumentIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 4,
    title: "Konsultasi Sunat",
    description: "Dapatkan konsultasi dari tenaga medis ahli sebelum sunat.",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-sumod-bl3" />,
  },
  {
    id: 5,
    title: "Perawatan Luka",
    description: "Layanan perawatan luka pasca sunat untuk penyembuhan cepat.",
    icon: <HeartIcon className="w-8 h-8 text-sumod-bl3" />,
  },
];

const ServiceCard = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <div className="px-0 md:px-4 py-10">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="p-0 md:p-2 space-y-2 lg:space-y-4 xl:w-3/4">
          <h1 className="text-2xl font-bold text-sumod-bl3">Sunat Modern</h1>
          <p className="text-start text-base font-medium text-gray-600">
            Kami menawarkan berbagai layanan sunat yang disesuaikan dengan kebutuhan dan kenyamanan pasien dengan metode
            modern dan peralatan medis terkini.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <a href="/layanan" className="text-sumod-bl3 text-base font-medium flex items-center">
              Lihat Layanan Kami
              <ArrowRightIcon className="w-5 h-5 ml-2 text-custom-orange animate-move-x" />
            </a>
            {swiperInstance && (
              <div className="relative flex gap-4 justify-end py-4 px-4 items-center">
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

        <div className="relative flex gap-6 overflow-x-auto no-scrollbar">
          <Swiper
            ref={swiperRef}
            onSwiper={handleSwiper}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            loopedSlides={5}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-6"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex-shrink-0 mx-auto rounded-lg p-6 flex flex-col text-start bg-sumod-bl2 text-gray-800">
                  <div className="w-full h-32 xl:h-48">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full">{service.icon}</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
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

export default ServiceCard;
