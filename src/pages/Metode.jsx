import React from "react";

const Metode = ({ title, description, image }) => {
  const metodeData = [
    {
      id: 1,
      title: "Metode A",
      description: "Penjelasan singkat tentang Metode A yang dapat membantu proses.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Metode B",
      description: "Penjelasan singkat tentang Metode B yang relevan untuk kebutuhan.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Metode C",
      description: "Penjelasan singkat tentang Metode C yang memberikan solusi efisien.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Metode D",
      description: "Penjelasan singkat tentang Metode D untuk pengoptimalan hasil.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className=" py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">Metode Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metodeData.map((metode) => (
          <div
            key={metode.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={metode.image} alt={metode.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{metode.title}</h2>
              <p className="text-gray-600 text-sm">{metode.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="profile-content p-6 space-y-4 mt-5 mx-[10%]">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://via.placeholder.com/50"
            alt="Icon Metode"
            className="w-12 h-12 object-cover rounded-custom-br"
          />
          <h1 className="text-4xl font-semi-bold leading-tight text-center">METODE A</h1>
        </div>
        <p className="text-gray-700 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="profile-content p-6 space-y-4 mt-5 mx-[10%]">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://via.placeholder.com/50"
            alt="Icon Metode"
            className="w-12 h-12 object-cover rounded-custom-br"
          />
          <h1 className="text-4xl font-semi-bold leading-tight text-center">METODE B</h1>
        </div>
        <p className="text-gray-700 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="profile-content p-6 space-y-4 mt-5 mx-[10%]">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://via.placeholder.com/50"
            alt="Icon Metode"
            className="w-12 h-12 object-cover rounded-custom-br"
          />
          <h1 className="text-4xl font-semi-bold leading-tight text-center">METODE C</h1>
        </div>
        <p className="text-gray-700 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Metode;
