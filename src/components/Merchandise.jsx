import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 1 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 4 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full">
      <div className="carousel w-full relative">
        <div
          id="item1"
          className={`carousel-item w-full flex justify-center ${activeIndex === 1 ? 'block' : 'hidden'}`}
        >
          <img
            src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190550/assets/kegcooqandlq3lqijygq.png"
            className="w-auto h-[100px] lg:h-[200px] xl:h-[300px] object-contain"
            alt="Item 1"
          />
        </div>
        <div
          id="item2"
          className={`carousel-item w-full flex justify-center ${activeIndex === 2 ? 'block' : 'hidden'}`}
        >
          <img
            src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190550/assets/kegcooqandlq3lqijygq.png"
            className="w-auto h-[100px] lg:h-[200px] xl:h-[300px] object-contain"
            alt="Item 2"
          />
        </div>
        <div
          id="item3"
          className={`carousel-item w-full flex justify-center ${activeIndex === 3 ? 'block' : 'hidden'}`}
        >
          <img
            src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190549/assets/aef6jwslgklxeijpapuy.png"
            className="w-auto h-[100px] lg:h-[200px] xl:h-[300px] object-contain"
            alt="Item 3"
          />
        </div>
        <div
          id="item4"
          className={`carousel-item w-full flex justify-center ${activeIndex === 4 ? 'block' : 'hidden'}`}
        >
          <img
            src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190549/assets/h8ecnlccaezfcxfm1q6b.png"
            className="w-auto h-[100px] lg:h-[200px] xl:h-[300px] object-contain"
            alt="Item 4"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10">
        <button
          className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 text-sumod-bl3 border border-sumod-bl3 rounded-full hover:bg-sumod-bl3 hover:text-white hover:border-none transition duration-300"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <button
          className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10  text-sumod-bl3 border border-sumod-bl3 rounded-full hover:bg-sumod-bl3 hover:text-white hover:border-none transition duration-300"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
