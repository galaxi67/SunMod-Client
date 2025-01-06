import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api";

const ImageCard = ({ src, alt }) => (
  <div className="p-4 w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-blue-50 rounded-custom-br">
    <div className="overflow-hidden aspect-square flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </div>
);

const Metode = () => {
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMethods = async () => {
      setLoading(true);
      try {
        const response = await fetchData("method");
        setMethods(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadMethods();
  }, []);

  const renderFormattedDescription = (description) => {
    let formattedText = description.replace(/\n/g, "<span class='block mb-2'></span>");

    formattedText = formattedText.replace(
      /\[\[highlight\]\](.*?)\[\[\/highlight\]\]/g,
      '<span class="bg-emerald-100 font-semibold text-custom-black p-2 inline-block rounded-custom-br">$1</span>'
    );

    formattedText = formattedText.replace(/•/g, '<span class="font-bold">•</span>');

    return { __html: formattedText };
  };

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">METODE SUMOD</h1>
              <h2 className="font-normal text-xs sm:text-xl lg:text-2xl leading-3 tracking-widest">
                Solusi Tepat Hasil Maksimal
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden md:block hidden">
                <img src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190549/assets/aef6jwslgklxeijpapuy.png" alt="Profile" className="w-1/2 h-auto object-cover mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2 sm:mt-3 md:mt-4 lg:mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-content-center">
            {methods.map((method, index) => (
              <ImageCard key={index} src={method.picture} alt={method.name} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-custom-black mx-auto">
          <div className="max-w-full mx-auto px-0 md:px-2 lg:px-10 xl:px-12 space-y-20">
            {methods.map((method, index) => (
              <div key={method.id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0">

                <div className={`title-content space-y-4 ${index % 2 === 0 ? "" : "md:order-2"}`}>
                  <h1 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold tracking-wide">
                    {method.name.toUpperCase()}
                  </h1>
                  <div
                    className="text-sm sm:text-xl xl:text-2xl font-light text-start xl:text-justify mb-4 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={renderFormattedDescription(method.description)}
                  ></div>
                </div>

                <div
                  className={`flex justify-center bg-slate-50 shadow-lg w-full h-auto sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-custom-br overflow-hidden ${
                    index % 2 !== 0 ? "" : "justify-self-end"
                  }`}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={method.picture} alt={method.name} className="w-auto h-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metode;
