import React from "react";

function AdminArtikel() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center mt-10 justify-center ">
        <div className="relative inline-block text-6xl font-extrabold group">
          <span className="relative">Paket</span>
          <span className="absolute bg-green-500 group-hover:bg-red-400 transition-colors duration-300 rounded-full w-10 h-10 -top-1 left-8 transform -translate-x-1/2 -z-10"></span>
        </div>
      </div>
    </div>
  );
}

export default AdminArtikel;
