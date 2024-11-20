import React from "react";

const Layanan = () => {
  const metodeData = [
    {
      id: 1,
      title: "Metode A",
      description: "Penjelasan singkat tentang Metode A yang dapat membantu proses.",
      image: "https://via.placeholder.com/150",
      phone: "+6281234567890", // Replace with the actual phone number
      message: "Saya tertarik dengan Metode A. Bisa jelaskan lebih lanjut?",
    },
    {
      id: 2,
      title: "Metode B",
      description: "Penjelasan singkat tentang Metode B yang relevan untuk kebutuhan.",
      image: "https://via.placeholder.com/150",
      phone: "+6289876543210", // Replace with the actual phone number
      message: "Saya tertarik dengan Metode B. Bisa jelaskan lebih lanjut?",
    },
    {
      id: 3,
      title: "Metode C",
      description: "Penjelasan singkat tentang Metode C yang memberikan solusi efisien.",
      image: "https://via.placeholder.com/150",
      phone: "+6281234567890", // Replace with the actual phone number
      message: "Saya tertarik dengan Metode C. Bisa jelaskan lebih lanjut?",
    },
    {
      id: 4,
      title: "Metode D",
      description: "Penjelasan singkat tentang Metode D untuk pengoptimalan hasil.",
      image: "https://via.placeholder.com/150",
      phone: "+6289876543210", // Replace with the actual phone number
      message: "Saya tertarik dengan Metode D. Bisa jelaskan lebih lanjut?",
    },
  ];

  const createWhatsAppLink = (phone, message) => {
    // WhatsApp API URL format: https://wa.me/{phone_number}?text={message}
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-10 px-5 ">
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
              <a
                href={createWhatsAppLink(metode.phone, metode.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-center block"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan