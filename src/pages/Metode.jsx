import React from "react";
import MetodeImage from "../assets/karakter5.png";
import Ring from "../assets/super-ring.png"
import Tekno from "../assets/tekno-sealer.png"
import Combo from "../assets/combo-sealer.png"
import Circle from "../assets/circle-clamp.png"

const ImageCard = ({ src, alt, targetId }) => (
  <a
    href={`#${targetId}`}
    className="p-4 w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-blue-50 rounded-custom-br"
  >
    <div className="overflow-hidden aspect-square flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </a>
);

const ImageGrid = () => {
  const images = [
    { src: Ring, alt: "Ring", targetId: "section-ring" },
    { src: Tekno, alt: "Tekno", targetId: "section-tekno" },
    { src: Combo, alt: "Combo", targetId: "section-combo" },
    { src: Circle, alt: "Circle", targetId: "section-circle" },
  ];

  return (
    <div className="flex justify-center items-center mt-6 sm:mt-10 md:mt-12 lg:mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-content-center">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} targetId={image.targetId} />
        ))}
      </div>
    </div>
  );
};

export const Metode = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 bg-gradient-to-l from-blue-50 via-blue-400 to-custom-blue mt-3 sm:mt-5 lg:mt-15 rounded-custom-br mx-5 lg:mx-1">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="title-content space-y-4 my-auto text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">METODE SUMOD</h1>
            <h2 className="font-normal text-xs sm:text-xl lg:text-2xl leading-3 tracking-widest">
              Solusi Tepat Hasil Maksimal
            </h2>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden">
              <img src={MetodeImage} alt="Profile" className="w-1/2 h-auto object-cover mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <ImageGrid />
      {/* //Konten */}
      <div className="mt-20 space-y-32 text-custom-black mx-auto">
        {/* // Kanan */}
        <div
          id="section-circle"
          className="max-w-full mx-auto px-4 sm:px-8 md:px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="title-content space-y-4 order-2 md:order-1 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">METODE CIRCLE CLAMP</h1>
            <div className="text-sm sm:text-xl xl:text-2xl">
              <h2 className="font-light leading-2 text-justify mb-4">
                Metode sunat Circle Clamp adalah teknik sunat modern yang menggunakan alat bernama "Circle Clamp" untuk
                mempermudah dan mempercepat proses sunat.
              </h2>
              <h3 className="font-semibold bg-emerald-100 text-custom-black p-3 tracking-wide inline-block rounded-custom-br">
                Keunggulan Metode Circle Clamp :
              </h3>
              <ol className="list-disc list-inside leading-relaxed text-justify indent-5">
                <li className="mb-2">Bisa mandi</li>
                <li className="mb-2">Tanpa perban</li>
                <li className="mb-2">Tanpa batas usia</li>
                <li className="mb-2">Bisa beraktifitas biasa</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-end bg-slate-50 shadow-lg w-full h-auto sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-custom-br ml-auto overflow-hidden order-1 md:order-2">
            <div className="flex items-center justify-center w-full h-full">
              <img src={Circle} alt="Profile" className="w-auto h-full object-contain" />
            </div>
          </div>
        </div>
        {/* // Kiri */}
        <div
          id="section-tekno"
          className="max-w-full mx-auto px-4 sm:px-8 md:px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="flex justify-start bg-slate-50 shadow-lg w-full h-auto sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-custom-br mr-auto overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">
              <img src={Tekno} alt="Profile" className="w-auto h-full object-contain" />
            </div>
          </div>
          <div className="title-content space-y-4 ml-auto mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">METODE TEKNO SEALER</h1>
            <div className="text-sm sm:text-xl xl:text-2xl">
              <h2 className="font-light leading-2 text-justify mb-4">
                Metode sunat tekno sealer adalah teknik sunat modern yang menggunakan alat khusus bernama "sealer" untuk
                memotong dan mengikat pembuluh darah secara otomatis.
              </h2>
              <h3 className="font-semibold bg-emerald-100 text-custom-black p-3 tracking-wide inline-block rounded-custom-br">
                Keunggulan Metode Tekno Sealer :
              </h3>
              <ol className="list-disc list-inside leading-relaxed text-justify indent-5">
                <li className="mb-2">Bisa mandi</li>
                <li className="mb-2">Tanpa perban</li>
                <li className="mb-2">Tanpa batas usia</li>
                <li className="mb-2">Bisa beraktifitas biasa</li>
              </ol>
            </div>
          </div>
        </div>
        {/* // Kanan */}
        <div
          id="section-ring"
          className="max-w-full mx-auto px-4 sm:px-8 md:px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="title-content space-y-4 order-2 md:order-1 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">METODE SUPER RING</h1>
            <div className="text-sm sm:text-xl xl:text-2xl">
              <h2 className="font-light leading-2 text-justify mb-4">
                Metode sunat Super Ring adalah teknik sunat modern yang menggunakan alat khusus bernama "Super Ring" untuk
                mempermudah prosedur khitan.
              </h2>
              <h3 className="font-semibold bg-emerald-100 text-custom-black p-3 tracking-wide inline-block rounded-custom-br">
                Keunggulan Metode Super Ring :
              </h3>
              <ol className="list-disc list-inside leading-relaxed text-justify indent-5">
                <li className="mb-2">Bisa mandi</li>
                <li className="mb-2">Tanpa perban</li>
                <li className="mb-2">Tanpa batas usia</li>
                <li className="mb-2">Bisa beraktifitas biasa</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-end bg-slate-50 shadow-lg w-full h-auto sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-custom-br ml-auto overflow-hidden order-1 md:order-2">
            <div className="flex items-center justify-center w-full h-full">
              <img src={Ring} alt="Profile" className="w-auto h-full object-contain" />
            </div>
          </div>
        </div>
        {/* // Kiri */}
        <div
          id="section-combo"
          className="max-w-full mx-auto px-4 sm:px-8 md:px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="flex justify-start bg-slate-50 shadow-lg w-full h-auto sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-custom-br mr-auto overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">
              <img src={Combo} alt="Profile" className="w-auto h-full object-contain" />
            </div>
          </div>
          <div className="title-content space-y-4 ml-auto mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">METODE TRIMMING FORCEP</h1>
            <div className="text-sm sm:text-xl xl:text-2xl">
              <h2 className="font-light leading-2 text-justify mb-4">
                Metode sunat Trimming Forcep merupakan kombinasi antara konvensional dengan metode modern yang mengedepankan kenyamanan dan estetika hasil, dapat digunakan semua kondisi.
              </h2>
              <h3 className="font-semibold bg-emerald-100 text-custom-black p-3 tracking-wide inline-block rounded-custom-br">
                Keunggulan Metode Trimming Forcep :
              </h3>
              <ol className="list-disc list-inside leading-relaxed text-justify indent-5">
                <li className="mb-2">Bisa mandi</li>
                <li className="mb-2">Tanpa perban</li>
                <li className="mb-2">Tanpa batas usia</li>
                <li className="mb-2">Bisa beraktifitas biasa</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metode;
