import React, { useState } from "react";
import { toast } from "react-toastify";
import { createData } from "../../api/apiService";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateMethod = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    picture: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
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

    if (!formData.picture) {
      newErrors.picture = "Gambar tidak boleh kosong.";
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
      if (formData.picture) data.append("picture", formData.picture);

      setLoading(true);
      const response = await createData("method", data);
      toast.success(`Metode "${response.name}" berhasil dibuat!`);

      setFormData({ name: "", description: "", picture: null });
      setLoading(false);
    } catch (err) {
      toast.error("Gagal membuat metode: " + (err.response?.data?.message || err.message));
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
      <h2 className="text-xl font-bold mb-4">Buat Metode Baru</h2>

      <input
        type="text"
        placeholder="Judul Metode"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      {errors.name && <div className="text-red-500 mb-2">{errors.name}</div>}

      <label className="font-semibold">Deskripsi</label>
      <ReactQuill
        placeholder="Deskripsi Metode"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        className="py-3"
      />
      {errors.description && <div className="text-red-500 mb-2">{errors.description}</div>}

      <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 w-full mb-2" />
      {errors.picture && <div className="text-red-500 mb-2">{errors.picture}</div>}

      <button
        onClick={handleSubmit}
        className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Buat Metode"}
      </button>
    </div>
  );
};

export default CreateMethod;