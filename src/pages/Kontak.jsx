import { useState } from "react";

const Kontak = () => {
  const [name, setName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const waLink = `https://wa.me/6281313138870?text=Nama%3A%20${encodeURIComponent(
      name
    )}%0AKeluhan%3A%20${encodeURIComponent(complaint)}`;

    window.open(waLink, "_blank");
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide flex justify-center mt-16">
          Hubungi Kami
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 mx-auto">
          <div className="text-custom-black flex flex-col justify-center rounded-lg mx-auto py-10">
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest mb-5">Kontak Kami</h1>
            <h2 className="font-normal text-base sm:text-lg lg:text-xl tracking-widest">
              Hubungi kami untuk mendapatkan informasi lebih lanjut, bantuan, atau dukungan. Tim kami siap melayani Anda
              dengan cepat dan ramah
            </h2>
            <ol className="list-disc list-inside text-lg sm:text-xl lg:text-2xl mt-4 leading-relaxed text-justify space-y-4">
              <li className="flex items-center justify-start">
                <div className="p-3 bg-blue-600 text-white mr-5 flex items-center justify-center w-10 h-10 rounded-full">
                  <i className="fas fa-map-marker-alt text-3xl"></i>
                </div>
                <span className="text-start font-semibold">Jl-224, Banyuwangi, East Java, Indonesia</span>
              </li>
              <li className="flex items-center justify-start">
                <div className="p-3 bg-green-600 text-white mr-5 flex items-center justify-center w-10 h-10 rounded-full">
                  <i className="fas fa-phone-alt text-2xl"></i>
                </div>
                <span className="text-start font-semibold">+62 813-1313-8870</span>
              </li>
              <li className="flex items-center justify-start">
                <div className="p-3 bg-pink-600 text-white mr-5 flex items-center justify-center w-10 h-10 rounded-full">
                  <i className="fab fa-instagram text-3xl "></i>
                </div>
                <span className="text-start font-semibold">sumod.sunatmodern</span>
              </li>
            </ol>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 text-white  rounded-lg shadow-lg p-6 w-full sm:w-[350px] h-[350px] mx-auto">
              <h1 className="text-xl sm:text-2xl font-bold flex tracking-widest">Tanyakan Pada Kami</h1>
              <form className="w-full mt-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    placeholder="Keluhan"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    className="w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-[150px] resize-y"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 p-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Kirim ke WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-96 rounded-md overflow-hidden py-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.2786904792183!2d114.18130023967282!3d-8.445050299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3ffa211da2de5%3A0x8ed2a28fe6ab1af3!2sPraktek%20Dokter%20umum%20dr.%20Fills%20Prayoga%20B%20%2B%20Sunat%20Modern%20SUMOD!5e0!3m2!1sid!2sid!4v1733740630123!5m2!1sid!2sid"
            width="100%"
            height="100%"
            className="border-0 rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
