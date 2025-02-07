import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api/apiService";
import LoadingIndicator from "../components/LoadingIndicator";
import AOS from "aos";
import "aos/dist/aos.css";

const Layanan = () => {
  const [services, setServices] = useState([]);
  const [methods, setMethods] = useState([]);
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const loadServices = async () => {
      setLoading(true);
      try {
        const [response1, response2, response3] = await Promise.all([
          fetchData("service"),
          fetchData("method"),
          fetchData("banner"),
        ]);
        setServices(response1);
        setMethods(response2);
        setBoards(response3);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
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
                <img
                  src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190547/assets/dipkgjv5ltjmalqdn85v.png"
                  alt="Profile"
                  className="w-1/2 h-auto object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 p-2 rounded-custom-br">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-black tracking-wide flex flex-col items-center justify-center text-sumod-bl rounded-custom-br">
            PAKET LAYANAN SUNAT MODERN
          </h1>
          <p className="text-center font-semibold text-gray-400 text-xs md:text-lg lg:text-xl mb-5">
            pilih layanan sesuai kebutuhan anda
          </p>

          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-2 mb-5"
          >
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

          <div className="mt-5 md:mt-10 lg:mt-15 mb-2 md:mb-6 lg:mb-10 shadow-md rounded-custom-br border-0 md:border-t-2 p-0 md:p-3 xl:p-4">
            <div className="hidden sm:block">
              <h1 className="text-base md:text-4xl lg:text-5xl text-center font-black tracking-wide text-sumod-bl rounded-custom-br">
                LAYANAN SUNAT KHUSUS
              </h1>
              <p className="hidden sm:block text-center font-semibold text-gray-400 text-xs md:text-lg lg:text-xl mb-5">
                sunat dengan kondisi kesehatan tertentu
              </p>
            </div>
            {boards
              .filter((_, i) => i === 0)
              .map((board) => (
                <div key={board.name}>
                  {" "}
                  <img
                    src={board.picture}
                    alt={board.name}
                    className="w-full h-full object-contain rounded-custom-br"
                  />
                </div>
              ))}
          </div>

          <div className="mt-2 md:mt-10 lg:mt-15 mb-5 md:mb-10 lg:mb-15 shadow-md rounded-custom-br border-0 md:border-t-2 p-0 md:p-3 xl:p-4">
            <div className="hidden sm:block">
              <h1 className="text-base md:text-4xl lg:text-5xl text-center font-black tracking-wide text-sumod-bl rounded-custom-br">
                LAYANAN SOSIAL
              </h1>
              <p className="hidden sm:block text-center font-semibold text-gray-400 text-xs md:text-lg lg:text-xl mb-5">
                peduli sesama, berkah bersama
              </p>
            </div>
            {boards
              .filter((_, i) => i === 1)
              .map((board) => (
                <div key={board.name}>
                  {" "}
                  <img
                    src={board.picture}
                    alt={board.name}
                    className="w-full h-full object-contain rounded-custom-br"
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-wrap justify-center mt-5 md:mt-10 lg:mt-15">
            <h1 className="font-custom text-center text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-5 tracking-wide text-white bg-sumod-bl4 px-3 sm:px-4 md:px-5 p-3 rounded-custom-br">
              DAPATKAN HADIAH MENARIK <br /> DIHARI SPESIAL ANDA!
            </h1>
            <img
              src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736455276/assets/mmmxdrmcnlkp8cw5ls5t.png"
              alt="merchandise"
              className="w-auto h-[150px] md:h-[400px] object-contain"
            />
          </div>

          <div className="grid grid-row-2 mt-4 lg:mt-6 xl:mt-8 p-4 lg:p-6 border rounded-custom-br border-slate-300">
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

          <div className="mt-2 sm:mt-5 md:mt-10 lg:mt-15">
            <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-black tracking-wide flex flex-col items-center justify-center text-custom-black rounded-custom-br">
              METODE SUNAT KAMI
            </h1>
            <p className="text-center font-semibold text-gray-400 text-xs md:text-lg lg:text-xl mb-5">
              lihat metode yang kami gunakan
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:p-3 lg:p-6 xl:px-24">
                {methods.map((method, index) => (
                  <a
                    key={index}
                    href="/metode"
                    className="bg-slate-50 rounded-custom-br overflow-hidden p-3 aspect-square shadow-md hover:border-custom-yellow hover:border-2 hover:shadow-none duration-500 transition ease-in-out"
                  >
                    <img
                      src={method.picture}
                      alt={method.name}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
