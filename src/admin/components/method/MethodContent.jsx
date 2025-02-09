import React, { useState, useEffect } from "react";
import { fetchData, updateData, deleteMethod } from "../../api/apiService";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loading-icons";
import useAuth from "../../hooks/useAuth";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminMetode = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [newData, setNewData] = useState({ name: "", description: "", picture: null });
  const [nameError, setNameError] = useState("");
  const [descError, setDescError] = useState("");
  const [pictError, setPictError] = useState("");

  const [selectedAssetDel, setSelectedAssetDel] = useState(null);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadAssets = async () => {
    setLoading(true);
    try {
      const response = await fetchData("method");
      setAssets(response);
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
    setPictError("");
    if (!newData.name.trim()) {
      setNameError("Nama tidak boleh kosong.");
      isValid = false;
    }

    if (!newData.description.trim()) {
      setDescError("Deskripsi tidak boleh kosong.");
      isValid = false;
    }
    if (!isValid) return;

    try {
      const formData = new FormData();
      formData.append("name", newData.name);
      formData.append("description", newData.description);
      if (newData.picture) {
        formData.append("picture", newData.picture);
      }
      setBtnLoading(true);
      const updatedAsset = await updateData("method", id, formData);
      toast.dismiss();
      toast.success(`Metode ${updatedAsset.name} berhasil diupdate!`);
      setSelectedAsset(null);
      setNewData({ name: "", description: "", picture: null });
      loadAssets();
      setBtnLoading(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal mengupdate metode: " + (err.response?.data?.message || err.message));
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
      //   console.log("Deleting service with ID:", id);

      await login(email, password);

      await deleteMethod(id, email, password);

      toast.dismiss();
      toast.success(`Metode berhasil dihapus!`);

      setShowModal(false);
      setEmail("");
      setPassword("");
      loadAssets();
      setShowModal(false);
      setBtnLoading(false);
      resetFormDel();
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal menghapu metode: " + (err.response?.data?.message || err.message));
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
      picture: null,
    });
    setNameError("");
    setDescError("");
    setPictError("");
    setSelectedAsset(null);
  };

  const resetFormDel = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setSelectedAssetDel(null);
  };

  useEffect(() => {
    loadAssets();
  }, []);

  if (loading) return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p className="flex justify-center items-center">Error: {error}</p>;

  return (
    <div className="mx-auto p-4 mt-5">
      <h1 className="flex justify-center text-2xl font-bold mb-4">METODE SUMOD</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-3 lg:gap-5 xl:gap-6 mb-8">
          {Array.isArray(assets) &&
            assets.map((asset) => (
              <div
                key={asset.id}
                className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-auto sm:w-[350px] lg:w-[325px] xl:w-[300px] 2xl:w-[380] h-auto"
              >
                <img src={asset.picture} alt={asset.name} className="rounded-custom-br object-cover mb-2 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold text-center my-3">{asset.name}</h2>
                  <div
                    className="ql-editor rich-text mb-4 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: asset.description }}
                  ></div>
                  <div className="mt-4 space-x-5 justify-center flex">
                    <button
                      className="bg-sumod-bl3 text-white px-6 py-3 rounded-lg tracking-wider hover:bg-sumod-bl transition-colors"
                      onClick={() => {
                        setSelectedAsset(asset);
                        setNewData({
                          name: asset.name,
                          description: asset.description,
                          picture: null,
                        });
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-6 py-3 rounded-lg tracking-wider hover:bg-red-600 transition-colors"
                      onClick={() => {
                        setSelectedAssetDel(asset);
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
            <h3 className="text-xl font-semibold">Delete Metode</h3>
            <p>Apakah Anda yakin ingin menghapus metode ini? {selectedAssetDel.name}</p>
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

      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 overflow-hidden">
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <h2 className="font-semibold text-xl mb-4">Update Layanan: "{selectedAsset.name}"</h2>

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
                  onClick={() => handleUpdate(selectedAsset.id)}
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

export default AdminMetode;
