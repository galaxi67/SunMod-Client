import React, { useState } from "react";
import { toast } from "react-toastify";
import { createData } from "../../api/apiService";

const CreateArtikel = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    picture: null,
  });
  const [nameError, setNameError] = useState("");
  const [descError, setDescError] = useState("");
  const [pictError, setPictError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    let isValid = true;
    setNameError("");
    setDescError("");
    setPictError("");

    if (!formData.name.trim()) {
      setNameError("Nama tidak boleh kosong.");
      isValid = false;
    }

    if (!formData.description.trim()) {
      setDescError("Deskripsi tidak boleh kosong.");
      isValid = false;
    }

    if (!formData.picture) {
      setPictError("Gambar artikel tidak boleh kosong.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      if (formData.picture) data.append("picture", formData.picture);

      setLoading(true);
      const response = await createData("article", data);
      toast.success(`Artikel "${response.name}" berhasil dibuat!`);
      setFormData({ name: "", description: "", picture: null });
      setLoading(false);
    } catch (err) {
      toast.error("Gagal membuat artikel: " + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setPictError("Ukuran file maksimal 5MB.");
      return;
    }
    setFormData({ ...formData, picture: file });
    setPictError("");
  };

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Buat Artikel Baru</h2>
      <input
        type="text"
        placeholder="Judul Artikel"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      {nameError && <div className="text-red-500 mb-2">{nameError}</div>}
      <textarea
        placeholder="Deskripsi Artikel"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 w-full h-32 mb-2"
      ></textarea>
      {descError && <div className="text-red-500 mb-2">{descError}</div>}
      <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 w-full mb-2" />
      {pictError && <div className="text-red-500 mb-2">{pictError}</div>}
      <button
        onClick={handleSubmit}
        className={`bg-sumod-bl3 hover:bg-custom-blue text-white px-4 py-2 rounded ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Buat Artikel"}
      </button>
    </div>
  );
};

export default CreateArtikel;
