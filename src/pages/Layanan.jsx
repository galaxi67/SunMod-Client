import React from "react";
import LayananImage from "../assets/karakter1.png";
import Img1 from "../assets/sunat-img1.JPG";
import Img2 from "../assets/sunat-img2.JPG";
import Img3 from "../assets/sunat-img3.JPG";
import Img4 from "../assets/sunat-img4.JPG";
import Banner from "../assets/SUMOD BANNER.png";
import Char from "../assets/karakter4.png";

const Layanan = () => {
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
        <h1 className="mt-5 md:mt-10 lg:mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold tracking-wide flex flex-col items-center justify-center text-custom-black">
          PILIHAN PAKET SUNAT
        </h1>
        <h2 className="mt-1 lg:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium tracking-wide flex flex-col items-center justify-center text-custom-slate">
          untuk semua usia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-14 mt-3 lg:mt-8">
          <div
            className="col-span-1 row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden"
            style={{ backgroundImage: `url(${Img4})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="bg-black bg-opacity-70 w-full h-full text-white flex flex-col justify-center items-center p-5 ">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Paket 1 SuMod</h1>
              <h2 className="font-medium text-sm text-center sm:text-base lg:text-xl tracking-widest mt-4">
                paket 1 menggunakan metode Super Ring terkini untuk proses yang lebih cepat, minim rasa sakit, dan hasil
                yang rapi
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                <div>
                  <ol className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Keunggulan</p>
                    <li className="font-medium">Bisa mandi</li>
                    <li className="font-medium">Tanpa perban</li>
                    <li className="font-medium">Tanpa batas usia</li>
                    <li className="font-medium">Bisa beraktifitas biasa</li>
                  </ol>
                </div>
                <div>
                  <ol className="bg-gradient-to-t from-green-400 via-green-500 to-green-600 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Fasilitas</p>
                    <li className="font-medium">Celana Sunat</li>
                    <li className="font-medium">Obat-obatan</li>
                    <li className="font-medium">Kontrol Sunat</li>
                    <li className="font-medium">Sertifikat</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Nama: {name}&Tujuan: {goal}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="w-full mt-4 p-3 tracking-wide bg-red-500 text-white font-semibold rounded-md hover:bg-gradient-to-t from-green-500 to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Pesan Paket
                </button>
              </a>
            </div>
          </div>
          <div
            className="col-span-1 row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden"
            style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="bg-black bg-opacity-70 w-full h-full text-white flex flex-col justify-center items-center p-5 ">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Paket 2 SuMod</h1>
              <h2 className="font-medium text-xs text-center sm:text-base lg:text-xl tracking-widest mt-4">
                paket 2 menggunakan metode Combo Sealer untuk proses yang lebih praktis dan efisien untuk sunat modern
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                <div>
                  <ol className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Keunggulan</p>
                    <li className="font-medium">Bisa mandi</li>
                    <li className="font-medium">Tanpa perban</li>
                    <li className="font-medium">Tanpa batas usia</li>
                    <li className="font-medium">Bisa beraktifitas biasa</li>
                  </ol>
                </div>
                <div>
                  <ol className="bg-gradient-to-t from-green-400 via-green-500 to-green-600 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Fasilitas</p>
                    <li className="font-medium">Celana Sunat</li>
                    <li className="font-medium">Obat-obatan</li>
                    <li className="font-medium">Kontrol Sunat</li>
                    <li className="font-medium">Sertifikat</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Nama: {name}&Tujuan: {goal}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="w-full mt-4 p-3 tracking-wide bg-red-500 text-white font-semibold rounded-md hover:bg-gradient-to-t from-green-500 to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Pesan Paket
                </button>
              </a>
            </div>
          </div>
          <div
            className="col-span-1 row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden"
            style={{ backgroundImage: `url(${Img3})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="bg-black bg-opacity-70 w-full h-full text-white flex flex-col justify-center items-center p-5 ">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Paket 3 SuMod</h1>
              <h2 className="font-medium text-xs text-center sm:text-base lg:text-xl tracking-widest mt-4">
                paket 3 menggunakan metode Circle Clamp untuk pilihan terbaik hasil sempurna
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                <div>
                  <ol className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Keunggulan</p>
                    <li className="font-medium">Bisa mandi</li>
                    <li className="font-medium">Tanpa perban</li>
                    <li className="font-medium">Tanpa batas usia</li>
                    <li className="font-medium">Bisa beraktifitas biasa</li>
                  </ol>
                </div>
                <div>
                  <ol className="bg-gradient-to-t from-green-400 via-green-500 to-green-600 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Fasilitas</p>
                    <li className="font-medium">Celana Sunat</li>
                    <li className="font-medium">Obat-obatan</li>
                    <li className="font-medium">Kontrol Sunat</li>
                    <li className="font-medium">Sertifikat</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Nama: {name}&Tujuan: {goal}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="w-full mt-4 p-3 tracking-wide bg-red-500 text-white font-semibold rounded-md hover:bg-gradient-to-t from-green-500 to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Pesan Paket
                </button>
              </a>
            </div>
          </div>
          <div
            className="col-span-1 row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden"
            style={{ backgroundImage: `url(${Img2})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="bg-black bg-opacity-70 w-full h-full text-white flex flex-col justify-center items-center p-5 ">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Paket 4 SuMod</h1>
              <h2 className="font-medium text-xs text-center sm:text-base lg:text-xl tracking-widest mt-4">
                paket 4 menggunakan metode Tekno Sealer sebagai solusi modern untuk sunat nyaman, aman, dan cepat
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                <div>
                  <ol className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Keunggulan</p>
                    <li className="font-medium">Bisa mandi</li>
                    <li className="font-medium">Tanpa perban</li>
                    <li className="font-medium">Tanpa batas usia</li>
                    <li className="font-medium">Bisa beraktifitas biasa</li>
                  </ol>
                </div>
                <div>
                  <ol className="bg-gradient-to-t from-green-400 via-green-500 to-green-600 rounded-custom-br p-3 list-disc list-inside text-sm sm:text-lg leading-relaxed text-left indent-5">
                    <p className="text-center mb-3">Fasilitas</p>
                    <li className="font-medium">Celana Sunat</li>
                    <li className="font-medium">Obat-obatan</li>
                    <li className="font-medium">Kontrol Sunat</li>
                    <li className="font-medium">Sertifikat</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Nama: {name}&Tujuan: {goal}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="w-full mt-4 p-3 tracking-wide bg-red-500 text-white font-semibold rounded-md hover:bg-gradient-to-t from-green-500 to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Pesan Paket
                </button>
              </a>
            </div>
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
  );
};

export default Layanan;
