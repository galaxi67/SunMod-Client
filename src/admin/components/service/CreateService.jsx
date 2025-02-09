import React, { useState } from "react";
import { toast } from "react-toastify";
import { createData } from "../../api/apiService";
import ReactQuill from "react-quill";

const CreateService = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fasilitas: "",
    keunggulan: "",
    picture: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    fasilitas: "",
    keunggulan: "",
    picture: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Nama tidak boleh kosong.";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Deskripsi tidak boleh kosong.";
      isValid = false;
    }

    if (!formData.fasilitas.trim()) {
      newErrors.fasilitas = "Fasilitas wajib diisi.";
      isValid = false;
    }

    if (!formData.keunggulan.trim()) {
      newErrors.keunggulan = "Keunggulan wajib diisi.";
      isValid = false;
    }

    if (!formData.picture) {
      newErrors.picture = "Gambar layanan tidak boleh kosong.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("fasilitas", formData.fasilitas);
      data.append("keunggulan", formData.keunggulan);
      if (formData.picture) data.append("picture", formData.picture);

      setLoading(true);
      const response = await createData("service", data);
      toast.success(`Layanan "${response.name}" berhasil dibuat!`);

      setFormData({ name: "", description: "", fasilitas: "", keunggulan: "", picture: null });
      setLoading(false);
    } catch (err) {
      toast.error("Gagal membuat layanan: " + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, picture: "Ukuran file maksimal 5MB." });
      return;
    }

    setFormData({ ...formData, picture: file });
    setErrors({ ...errors, picture: "" });
  };

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Buat Layanan Baru</h2>

      <input
        type="text"
        placeholder="Judul Layanan"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      {errors.name && <div className="text-red-500 mb-2">{errors.name}</div>}

      <label className="font-semibold">Deskripsi</label>
      <ReactQuill
        placeholder="Deskripsi Layanan"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        className="py-3"
      />
      {errors.description && <div className="text-red-500 mb-2">{errors.description}</div>}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="font-semibold">Keunggulan</label>
          <ReactQuill
            placeholder="Keunggulan"
            value={formData.keunggulan}
            onChange={(value) => setFormData({ ...formData, keunggulan: value })}
            className="py-3 min-h-[150px]"
          />
          {errors.keunggulan && <div className="text-red-500 mb-2">{errors.keunggulan}</div>}
        </div>

        <div className="w-full md:w-1/2">
          <label className="font-semibold">Fasilitas</label>
          <ReactQuill
            placeholder="Fasilitas"
            value={formData.fasilitas}
            onChange={(value) => setFormData({ ...formData, fasilitas: value })}
            className="py-3 min-h-[150px]"
          />
          {errors.fasilitas && <div className="text-red-500 mb-2">{errors.fasilitas}</div>}
        </div>
      </div>

      <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 w-full mb-2" />
      {errors.picture && <div className="text-red-500 mb-2">{errors.picture}</div>}

      <button
        onClick={handleSubmit}
        className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Buat Layanan"}
      </button>
    </div>
  );
};

export default CreateService;
