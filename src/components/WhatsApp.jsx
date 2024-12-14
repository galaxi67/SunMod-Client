import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = '+6281313138870'; 
  const message = 'Halo, saya tertarik untuk bertanya lebih lanjut!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 flex justify-center items-center group"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping"></div>
      <div className="relative py-3 px-4 bg-green-600 text-white rounded-full shadow-lg flex justify-center items-center hover:bg-green-700 hover:scale-125 transition duration-300">
        <i className="fab fa-whatsapp text-3xl"></i>
      </div>
    </div>
  </a>
  );
};

export default WhatsAppIcon;
