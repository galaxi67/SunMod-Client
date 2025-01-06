import React from "react";
import InstagramFeed from "../components/InstagramFeed";

const Galeri = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <div className="py-10 h-[200px] md:h-[280px] lg:h-[400px] flex lg:justify-center lg:items-center bg-gradient-to-l from-blue-50 via-blue-400 to-custom-blue mt-3 sm:mt-5 lg:mt-15 rounded-custom-br lg:mx-1">
          <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="title-content space-y-4 my-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">GALERI SUMOD</h1>
              <h2 className="font-normal text-xs sm:text-xl lg:text-2xl leading-3 tracking-widest">
                Visualisasi Kesehatan, Wujudkan Impian
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden md:block hidden">
                <img
                  src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190548/assets/nrxg6uxi5swxh2g47aev.png"
                  alt="Profile"
                  className="w-1/2 h-auto object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 p-4">
          <InstagramFeed />
        </div>
      </div>
    </div>
  );
};

export default Galeri;
