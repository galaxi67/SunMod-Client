import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import LayananImage from "../assets/karakter1.png";
import Banner from "../assets/SUMOD BANNER.png";
import Char from "../assets/karakter4.png";

const Layanan = () => {
  const [services, setServices] = useState([]);
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        const [response1, response2] = await Promise.all([fetchData("service"), fetchData("method")]);

        setServices(response1);
        setMethods(response2);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <div className="py-10 h-[200px] md:h-[280px] lg:h-[400px] flex lg:justify-center lg:items-center bg-gradient-to-l from-blue-50 via-blue-400 to-custom-blue mt-3 sm:mt-5 lg:mt-15 rounded-custom-br lg:mx-1">
          <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="title-content space-y-4 my-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">LAYANAN SUMOD</h1>
              <h2 className="font-normal text-xs sm:text-xl md:text-lg lg:text-2xl leading-3 tracking-widest">
                Layanan Sunat yang Aman dan Ramah di Sunat Modern yang Dikerjakan Oleh Dokter Professional
              </h2>
            </div>
            <div className="flex justify-end">
              <div className="overflow-hidden md:block hidden">
                <img src={LayananImage} alt="Profile" className="w-1/2 h-auto object-cover mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 md:mt-12 lg:mt-16 mb-5 md:mb-10 lg:mb-15 p-2 rounded-custom-br">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-black tracking-wide flex flex-col items-center justify-center text-sumod-bl rounded-custom-br">
            PAKET LAYANAN SUNAT MODERN
          </h1>
          <p className="text-center font-semibold text-gray-400 text-xs md:text-lg lg:text-xl mb-5">
            pilih layanan sesuai kebutuhan anda
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-2 mb-5">
            {Array.isArray(services) &&
              services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-0 md:gap-3 xl:gap-4 p-3 lg:p-3 xl:p-5 bg-white border-2 shadow-custom hover:shadow-none hover:border-sumod-bl3 duration-500 rounded-xl overflow-hidden"
                >
                  {service.picture && (
                    <div className="col-span-1 flex flex-col gap-2 w-full">
                      <img
                        src={service.picture}
                        alt={service.name}
                        className="w-full h-full object-contain max-w-[200px] mx-auto hidden sm:block"
                      />
                      <h1 className="text-black/50 font-bold italic p-3 mt-0 md:-mt-14 lg:-mt-10 xl:-mt-16 mb-0 lg:mb-8 text-xs hidden sm:block">
                        *dapatkan merchandise spesial sebagai apresiasi!
                      </h1>
                    </div>
                  )}

                  <div className="col-span-2 flex flex-col justify-center text-gray-800">
                    <h1 className="text-2xl font-extrabold text-custom-black tracking-wide mb-2 text-center md:text-start">
                      {service.name}
                    </h1>
                    <h2 className="text-base text-gray-500 font-semibold leading-relaxed mb-4 text-justify lg:text-start">
                      {service.description}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-lg font-bold text-sumod-bl3">Keunggulan</p>
                        <p className="text-base text-gray-600 mt-2 whitespace-pre-wrap">{service.keunggulan}</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-sumod-bl3">Fasilitas</p>
                        <p className="text-base text-gray-600 mt-2 whitespace-pre-wrap">{service.fasilitas}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=Nama: ${service.name}&Tujuan: Pesan Paket`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          className="w-full py-3 bg-sumod-bl3 text-white font-bold rounded-lg shadow-md hover:bg-custom-blue duration-500 transition-all"
                        >
                          Konsultasikan Ke Dokter
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-black tracking-wide flex flex-col items-center justify-center text-custom-black rounded-custom-br">
            METODE YANG KAMI GUNAKAN
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="justify-center flex items-center">
              <div className="flex flex-col p-4 space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-wide text-custom-black rounded-custom-br">
                  METODE <span className="text-custom-blue">SUMOD</span>
                </h1>
                <h2 className="font-semibold text-gray-400 text-xs md:text-lg lg:text-lg">
                  Metode kami dirancang dengan teknologi terkini, mengutamakan kenyamanan, dan hasil terbaik untuk
                  memenuhi kebutuhan pasien dengan penuh perhatian
                </h2>
                <h3 className="font-medium text-sumod-bl3 text-xs md:text-lg lg:text-xl flex items-center">
                  Lihat metode yang kami gunakan
                  <button
                    onClick={() => (window.location.href = "/metode")}
                    className="ml-4 flex items-center justify-center text-custom-yellow hover:text-sumod-bl3 transition"
                    aria-label="Go to methods"
                  >
                    <ArrowRightIcon className="w-7 h-7 animate-pulse" />
                  </button>
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
              {methods.map((method, index) => (
                <a
                  key={index}
                  href="/metode"
                  className="bg-slate-50 rounded-custom-br overflow-hidden aspect-square p-4 w-[200px] h-auto shadow-md hover:border-custom-yellow hover:border-2 hover:shadow-none duration-500 transition ease-in-out"
                >
                  <img src={method.picture} alt={method.name} className="w-full h-full object-contain cursor-pointer" />
                </a>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="-mt-8 rounded-custom-br max-w-full mx-auto sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 bg-red-100 p-10 mb-6 shadow-lg">
              <div className="flex justify-center mx-auto w-full h-[300px] sm:w-[300px] lg:w-[300px] rounded-custom-br mr-auto overflow-hidden mb-5">
                <img src={Char} alt="Profile" className="w-auto h-full object-contain" />
              </div>
              <div className="title-content space-y-4 mx-auto">
                <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide text-center">
                  SUNAT KHUSUS
                </h1>
                <h2 className="font-light text-xs sm:text-xl lg:text-2xl leading-2 text-justify">
                  Melayani sunat dengan kondisi kesehatan tertentu
                </h2>
                <ol className="list-disc list-inside text-xs sm:text-xl md:text-lg lg:text-2xl leading-relaxed text-justify indent-5">
                  <li className="mb-2">Sunat Bayi</li>
                  <li className="mb-2">Sunat Gemuk atau Obesitas</li>
                  <li className="mb-2">Sunat Kulup Lengket</li>
                  <li className="mb-2">Sunat Perbaikan</li>
                  <li className="mb-2">Sunat Fimosis</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <img src={Banner} alt="Profile" className="w-full h-auto rounded-custom-br" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
