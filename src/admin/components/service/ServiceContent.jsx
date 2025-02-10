import React, { useEffect, useState } from "react";
import { fetchData, updateData, deleteService } from "../../api/apiService";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loading-icons";
import useAuth from "../../hooks/useAuth";
import ReactQuill from "react-quill";

const AdminLayanan = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [newData, setNewData] = useState({
    name: "",
    description: "",
    fasilitas: "",
    keunggulan: "",
    picture: null,
  });
  const [btnLoading, setBtnLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [descError, setDescError] = useState("");
  const [facError, setFacError] = useState("");
  const [excError, setExcError] = useState("");
  const [pictError, setPictError] = useState("");
  const [selectedAssetDel, setSelectedAssetDel] = useState(null);

  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadServices = async () => {
    setLoading(true);
    try {
      const response = await fetchData("service");
      setServices(response);
      setLoading(false);
    } catch (err) {
      setError(err?.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    let isValid = true;
    setNameError("");
    setDescError("");
    setFacError("");
    setExcError("");
    setPictError("");

    if (!newData.name.trim()) {
      setNameError("Judul wajib diisi.");
      isValid = false;
    }
    if (!newData.description.trim()) {
      setDescError("Deskripsi wajib diisi.");
      isValid = false;
    }
    if (!newData.fasilitas.trim()) {
      setFacError("Fasilitas wajib diisi.");
      isValid = false;
    }
    if (!newData.keunggulan.trim()) {
      setExcError("Keunggulan wajib diisi.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const formData = new FormData();
      formData.append("name", newData.name);
      formData.append("description", newData.description);
      formData.append("fasilitas", newData.fasilitas);
      formData.append("keunggulan", newData.keunggulan);
      if (newData.picture) {
        formData.append("picture", newData.picture);
      }
      setBtnLoading(true);
      const updatedService = await updateData("service", id, formData);
      toast.dismiss();
      toast.success(`Layanan ${updatedService.name} berhasil diupdate!`);
      setSelectedService(null);
      setNewData({ name: "", description: "", fasilitas: "", keunggulan: "", picture: null });
      loadServices();
      setBtnLoading(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal mengupdate layanan: " + (err.response?.data?.message || err.message));
      setBtnLoading(false);
    }
  };

  const handleDelete = async (id) => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email tidak boleh kosong.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password tidak boleh kosong.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      setBtnLoading(true);

      await login(email, password);

      await deleteService(id, email, password);

      toast.dismiss();
      toast.success(`Layanan berhasil dihapus!`);

      setShowModal(false);
      setEmail("");
      setPassword("");
      loadServices();
      setShowModal(false);
      setBtnLoading(false);
      resetFormDel();
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal menghapus layanan: " + (err.response?.data?.message || err.message));
      setBtnLoading(false);
      setShowModal(false);
      resetFormDel();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      e.target.value = "";
      setPictError("Ukuran file maksimal 5MB.");
      return;
    }
    if (file) {
      setPictError("");
      setNewData({ ...newData, picture: file });
    }
  };

  const resetForm = () => {
    setNewData({
      name: "",
      description: "",
      fasilitas: "",
      keunggulan: "",
      picture: null,
    });
    setNameError("");
    setDescError("");
    setFacError("");
    setExcError("");
    setPictError("");
    setSelectedService(null);
  };

  const resetFormDel = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setSelectedAssetDel(null);
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p className="flex justify-center items-center">Error: {error}</p>;

  return (
    <div className="mx-auto p-4 mt-5">
      <h1 className="flex justify-center text-2xl font-bold mb-4">LAYANAN SUMOD</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-3 lg:gap-5 xl:gap-6 mb-8">
          {Array.isArray(services) &&
            services.map((service) => (
              <div
                key={service.id}
                className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-auto sm:w-[350px] lg:w-[325px] xl:w-[350px] 2xl:w-[380] h-auto"
              >
                <img src={service.picture} alt={service.name} className="rounded-custom-br object-cover mb-2 mx-auto" />
                <div className="">
                  <div></div>
                  <h2 className="text-xl font-semibold text-center my-3">{service.name}</h2>
                  <div
                    className="ql-editor font-medium text-justify mb-4 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  <div className="gap-16 flex justify-center p-2 whitespace-pre-wrap">
                    <p className="font-bold text-justify whitespace-pre-wrap">Fasilitas</p>
                    <p className="font-bold text-justify whitespace-pre-wrap">Keunggulan</p>
                  </div>
                  <div className="gap-2 flex justify-between p-1 whitespace-pre-wrap">
                    <p
                      className="ql-editor font-light text-start mb-4 whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: service.fasilitas }}
                    ></p>
                    <p
                      className="ql-editor font-light text-balance mb-4 whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: service.keunggulan }}
                    ></p>
                  </div>

                  <div className="mt-4 space-x-5 justify-center flex">
                    <button
                      className="bg-sumod-bl3 text-white px-6 py-3 rounded-lg tracking-wider hover:bg-sumod-bl transition-colors"
                      onClick={() => {
                        setSelectedService(service);
                        setNewData({
                          name: service.name,
                          description: service.description,
                          fasilitas: service.fasilitas,
                          keunggulan: service.keunggulan,
                          picture: null,
                        });
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-6 py-3 rounded-lg tracking-wider hover:bg-red-600 transition-colors"
                      onClick={() => {
                        setSelectedAssetDel(service);
                        setShowModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96 space-y-4">
            <h3 className="text-xl font-semibold">Delete Layanan</h3>
            <p>Apakah Anda yakin ingin menghapus layanan ini? {selectedAssetDel.id}</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className="border p-2 w-full"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className="border p-2 w-full"
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded-md"
                onClick={() => {
                  setShowModal(false);
                  resetFormDel();
                }}
              >
                Batal
              </button>
              <button
                className="bg-sidebar text-white px-4 py-2 rounded"
                onClick={() => handleDelete(selectedAssetDel?.id)}
                disabled={btnLoading}
              >
                {btnLoading ? <BallTriangle className="h-7 w-7" /> : "Hapus Artikel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 overflow-hidden">
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <h2 className="font-semibold text-xl mb-4">Update Layanan: "{selectedService.name}"</h2>

              <div className="mb-4">
                <p className="text-custom-black/40 font-bold mb-1">Judul</p>
                <input
                  type="text"
                  placeholder="Judul Baru"
                  value={newData.name}
                  onChange={(e) => {
                    setNewData({ ...newData, name: e.target.value });
                    if (nameError) setNameError("");
                  }}
                  className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-300"
                />
                {nameError && <div className="text-red-500 font-semibold text-sm mt-1">{nameError}</div>}
              </div>

              <div className="mb-4">
                <p className="text-custom-black/40 font-bold mb-1">Deskripsi</p>
                <div className="bg-white p-2 min-h-[150px]">
                  <ReactQuill
                    value={newData.description}
                    onChange={(value) => setNewData((prev) => ({ ...prev, description: value }))}
                  />
                </div>
                {descError && <p className="text-red-500 text-sm mt-1">{descError}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-custom-black/40 font-bold mb-1">Fasilitas</p>
                  <div className=" bg-white p-2 min-h-[150px]">
                    <ReactQuill
                      value={newData.fasilitas}
                      onChange={(value) => setNewData((prev) => ({ ...prev, fasilitas: value }))}
                    />
                  </div>
                  {facError && <p className="text-red-500 text-sm mt-1">{facError}</p>}
                </div>

                <div>
                  <p className="text-custom-black/40 font-bold mb-1">Keunggulan</p>
                  <div className="bg-white p-2 min-h-[150px]">
                    <ReactQuill
                      value={newData.keunggulan}
                      onChange={(value) => setNewData((prev) => ({ ...prev, keunggulan: value }))}
                    />
                  </div>
                  {excError && <p className="text-red-500 text-sm mt-1">{excError}</p>}
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-300"
                />
                {pictError && <div className="text-red-500 font-semibold text-sm mt-1">{pictError}</div>}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  className="bg-sidebar text-white px-4 py-2 rounded hover:bg-sidebar-dark transition-colors"
                  onClick={() => handleUpdate(selectedService.id)}
                  disabled={btnLoading}
                >
                  {btnLoading ? <BallTriangle stroke="#fff" className="h-7 w-7" /> : "Simpan Perubahan"}
                </button>

                <button
                  className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors"
                  onClick={resetForm}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayanan;
