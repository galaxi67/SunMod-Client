import React from "react";
import ProfilImage from "../assets/homapage.jpg";
import Profil2 from "../assets/img-01.png";
import Char1 from "../assets/karakter1.png";
import Char2 from "../assets/karakter2.png";
import Char3 from "../assets/karakter3.png";
import Char4 from "../assets/karakter4.png";

const Profil = () => {
  return (
    <div>
      <div className="rounded-custom-br relative overflow-hidden mt-3 sm:mt-5 lg:mt-15">
        <div className="max-w-full mx-auto h-80 w-auto flex flex-col items-center justify-center">
          <div className="title-content py-20 space-y-2 text-center text-white relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest mx-auto">SUNAT MODERN</h1>
            <h2 className="font-normal text-xs sm:text-xl lg:text-2xl tracking-widest mx-auto">
              Solusi Tepat Hasil Maksimal
            </h2>
          </div>
          <div className="w-full h-full ">
            <img
              src={ProfilImage}
              alt="Profile"
              className="bg-cover object-cover w-full h-full absolute inset-0 z-0 rounded-custom-br"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 h-screen mt-6">
        <div
          className="col-span-1 row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden"
          style={{ backgroundImage: `url(${Profil2})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-end p-14">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-white">SuMod</h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-white">
              SuMod (Sunat Modern) adalah tempat sunat yang mengedepankan kepuasan dari pasien
            </h2>
          </div>
        </div>
        <div className="border-2 border-custom-black text-custom-black flex flex-col items-center justify-center text-lg font-medium rounded-custom-br">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Visi</h1>
          <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-center p-4">
            "Menjadi pusat layanan sunat modern terbaik yang mengutamakan kenyamanan, keamanan, dan kepuasan pelanggan
            melalui teknologi terkini dan pelayanan profesional."
          </h2>
        </div>
        <div className="border-2 border-custom-black text-custom-black flex flex-col items-center justify-center text-lg font-medium rounded-custom-br">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Misi</h1>
          <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-center p-4 flex items-center justify-center">
            1. Memberikan Pelayanan Profesional: Menghadirkan tim medis yang terlatih dan berpengalaman untuk memberikan
            prosedur sunat yang aman dan nyaman. <br />
            2. Menggunakan Teknologi Modern: Mengaplikasikan metode sunat terkini seperti klamp, stapler, atau laser
            untuk mempercepat proses penyembuhan.
            <br />
            3. Mengutamakan Kebersihan dan Sterilisasi: Memastikan setiap alat dan fasilitas sesuai dengan standar
            kesehatan internasional.
            <br />
            4. Edukasi dan Sosialisasi: Memberikan informasi yang akurat kepada orang tua dan anak tentang proses,
            manfaat, dan perawatan pasca sunat.
            <br />
            5. Fokus pada Kepuasan Pelanggan: Menyediakan layanan ramah anak, seperti fasilitas hiburan, untuk
            mengurangi rasa takut dan cemas.
          </h2>
        </div>
      </div>
      <div>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-black -tracking-wide flex justify-center mt-16">
          Kenapa harus di SuMod?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-14 mt-8">
          <div className="bg-emerald-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char1} alt="Benefit Icon" className="w-40 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Keamanan dan Sterilisasi</h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Tempat yang tepat akan memastikan alat dan fasilitas digunakan sesuai standar medis untuk menghindari hal
              yang tidak diinginkan.
            </h2>
          </div>
          <div className="bg-orange-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char2} alt="Benefit Icon" className="w-40 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Profesionalisme Tenaga Medis</h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Prosedur dilakukan oleh tenaga medis berpengalaman oleh dokter yang terlatih dalam metode sunat modern.
            </h2>
          </div>
          <div className="bg-red-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char3} alt="Benefit Icon" className="w-40 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest">Metode yang Tepat</h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Tempat yang terpercaya menawarkan berbagai metode modern seperti klamp, stapler, atau laser, yang lebih
              cepat, aman, dan minim rasa sakit dibandingkan metode konvensional.
            </h2>
          </div>
          <div className="bg-violet-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char4} alt="Benefit Icon" className="w-36 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-center">
              Edukasi dan Perawatan Pasca Sunat
            </h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Penyedia layanan yang baik akan memberikan edukasi tentang perawatan luka, langkah-langkah kebersihan, dan
              pemulihan pasca prosedur.
            </h2>
          </div>
          <div className="bg-violet-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char4} alt="Benefit Icon" className="w-36 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-center">
              Lingkungan Ramah Anak
            </h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Fasilitas di tempat yang tepat dirancang untuk mengurangi rasa takut pada anak, seperti
              menyediakan ruang yang nyaman dan ramah anak.
            </h2>
          </div>
          <div className="bg-violet-100 text-custom-black flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
            <img src={Char4} alt="Benefit Icon" className="w-36 h-auto mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-center">
              Dukungan Teknologi
            </h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">
              Tempat yang tepat dilengkapi teknologi terkini untuk mempercepat proses dan meningkatkan akurasi
              prosedur.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
