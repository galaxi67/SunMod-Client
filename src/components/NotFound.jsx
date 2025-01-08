import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 text-gray-800 font-bold text-2xl">
                Sepertinya Anda telah menemukan pintu menuju sesuatu yang luar biasa
              </h1>
              <p class="my-2 text-gray-800">
                Maaf tentang itu! Silakan kunjungi laman kami untuk mendapatkan informasi yang Anda perlukan.
              </p>
              <button className="px-8 py-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                <Link to="/" className="text-white no-underline">
                  Kembali ke SuMod!
                </Link>
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190548/assets/m1ds0vsclcwlaomud8ak.png" alt="NotFound" className="w-1/2 h-auto object-contain" />
      </div>
    </div>
  );
};

export default NotFound;
