import React from "react";

const Artikel = () => {
  return (
    <div className="py-10 px-5 space-y-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://sehatnegeriku.kemkes.go.id/topik/berita-utama/" // Ganti dengan URL halaman berita yang ingin Anda tampilkan
          title="Berita Lainnya"
          className="w-full h-[600px] border-none rounded-lg"
        />
      </div>
    </div>
  );
};

export default Artikel;
