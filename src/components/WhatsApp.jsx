import React from 'react';

const WhatsAppIcon = () => {
  // Gantilah dengan nomor WhatsApp Anda
  const phoneNumber = '+6281234567890'; 
  const message = 'Halo, saya tertarik untuk bertanya lebih lanjut!';

  // Membuat link WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-glow fixed bottom-17 right-8 py-4 px-5 bg-green-600 text-white rounded-full shadow-lg flex justify-center items-center hover:bg-green-700 transition duration-300"
    >
      <i className="fab fa-whatsapp text-4xl"></i>
    </a>
  );
};

export default WhatsAppIcon;
