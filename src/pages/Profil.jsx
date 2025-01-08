import React, { useState, useEffect } from "react";
import { fetchData } from "../admin/api/apiService";
import { fetchVisionMission } from "../admin/api/apiService";
import LoadingIndicator from "../components/LoadingIndicator";

const Profil = () => {
  const [ListContent, setListContent] = useState([]);
  const [visionMission, setVisionMission] = useState({ vision: "", mission: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const response = await fetchData("product");
        const respVisionMission = await fetchVisionMission();
        setListContent(response || []);
        setVisionMission(respVisionMission || { vision: "", mission: "" });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <div className="py-10 h-[200px] md:h-[280px] lg:h-[400px] flex lg:justify-center lg:items-center bg-gradient-to-l from-blue-50 via-blue-400 to-custom-blue mt-3 sm:mt-5 lg:mt-15 rounded-custom-br lg:mx-1">
          <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="title-content space-y-4 my-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">PROFIL SUNAT MODERN</h1>
              <h2 className="font-normal text-xs sm:text-xl lg:text-2xl leading-3 tracking-widest">
                Layanan Terbaik dengan Metode Modern
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden md:block hidden">
                <img
                  src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190548/assets/m1ds0vsclcwlaomud8ak.png"
                  alt="Profile"
                  className="w-1/2 h-auto object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto mt-6">
          <div
            key={visionMission.id}
            className="col-span-1 row-span-1 xl:row-span-2 flex items-center justify-center text-xl font-bold rounded-custom-br overflow-hidden h-[250px] md:h-[400px] lg:h-[500px] xl:h-auto"
            style={{
              backgroundImage: `url(${visionMission.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-end p-6 lg:p-14">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-white">
                {visionMission.name || "Data tidak tersedia"}
              </h1>
              <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-white">
                {visionMission.description || "Deskripsi tidak tersedia"}
              </h2>
            </div>
          </div>

          <div className="border-8 border-sumod-bl2 h-auto text-custom-black flex flex-col items-center justify-center text-lg font-medium rounded-custom-br p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest">Visi</h1>
            <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-center mt-4">
              {visionMission.vision || "Data visi tidak tersedia"}
            </h2>
          </div>

          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1 border-8 border-sumod-bl2 text-custom-black flex flex-col items-center justify-center text-lg font-medium rounded-custom-br p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest">Misi</h1>
            <div
              className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-center mt-4 space-y-2 lg:space-y-4"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {visionMission.mission || "Data misi tidak tersedia"}
            </div>
          </div>
        </div>

        <div className="grid grid-row-2 mt-4 lg:mt-6 xl:mt-8 bg-slate-100 rounded-custom-br shadow-md p-4 lg:p-6">
          <div className="flex justify-center">
            <p className="text-slate-600 border-y-2 border-slate-300 text-center py-2 px-4 tracking-wider text-sm md:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-6">
              KEMITRAAN KAMI
            </p>
          </div>

          <div className="flex flex-row gap-6 justify-center items-center">
            <img
              src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190488/assets/n2jrykja50vssz463s5o.png"
              alt="Logo OSI"
              className="w-[80px] md:w-[150px] lg:w-[180px] xl:w-[250px] h-auto mx-auto"
            />
            <img
              src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736193440/assets/elbj6oojznoybz0hon9n.png"
              alt="Logo ASDOKI"
              className="w-[120px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-auto mx-auto"
            />
          </div>
        </div>

        <div className="bg-sumod-wt mb-2 xl:mb-4 rounded-custom-br p-4 lg:p-6 mt-4 lg:mt-6 xl:mt-8">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-sumod-bl tracking-wide flex justify-center ">
            KENAPA HARUS DI SUMOD?
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-sumod-wt rounded-custom-br">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-10 xl:p-14">
            {ListContent.map((item) => (
              <div key={item.id} className="bg-sumod-bl2 text-custom-black flex flex-col shadow-md rounded-lg p-6">
                <div className="flex flex-row xl:p-8 items-center mb-2 lg:mb-3">
                  <h1 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl text-sumod-bl font-bold tracking-wide text-start mb-4 flex-grow">
                    {item.name || "Data tidak tersedia"}
                  </h1>
                  <div className="bg-white p-1 lg:p-2 xl:p-3 rounded-custom-br flex-shrink-0">
                    <img
                      src={item.picture || "https://via.placeholder.com/150"}
                      alt={item.name || "Data tidak tersedia"}
                      className="h-14 w-14 lg:h-20 lg:w-20 xl:h-28 xl:w-28 object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-normal text-xs sm:text-base lg:text-xl tracking-widest text-justify">{item.description}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
