import React, { useState, useEffect } from "react";
import { fetchData, updateData, deleteArticle } from "../api/apiService";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loading-icons";

const AdminArtikel = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [newData, setNewData] = useState({ name: "", description: "", picture: null });
  const [nameError, setNameError] = useState("");
  const [descError, setDescError] = useState("");
  const [pictError, setPictError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadAssets = async () => {
    setLoading(true);
    try {
      const response = await fetchData("article");
      setAssets(response.reverse());
      setLoading(false);
    } catch (err) {
      setError(err.message);
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
      const updatedAsset = await updateData("article", id, formData);
      toast.dismiss();
      toast.success(`Artikel ${updatedAsset.name} berhasil diupdate!`);
      setSelectedAsset(null);
      setNewData({ name: "", description: "", picture: null });
      loadAssets();
      setBtnLoading(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal mengupdate artikel: " + (err.response?.data?.message || err.message));
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

      await deleteArticle(id, email, password);

      toast.dismiss();
      toast.success(`Artikel berhasil dihapus!`);

      setSelectedAsset(null);
      loadAssets();

      setBtnLoading(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal menghapus artikel: " + (err.response?.data?.message || err.message));
      setBtnLoading(false);
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

  const handleBulletPoint = () => {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
      const bulletText = `• ${selectedText}`;
      document.execCommand("insertText", false, bulletText);
    } else {
      document.execCommand("insertText", false, "• ");
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

  const currentPageData = assets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(assets.length / itemsPerPage);

  useEffect(() => {
    loadAssets();
  }, []);

  if (loading) return <p className="flex justify-center items-center ">Loading...</p>;
  if (error) return <p className="flex justify-center items-center">Error: {error}</p>;

  return (
    <div className="mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Artikel Sumod</h2>
      <div className="flex justify-center w-full">
        <div className="mb-8 space-y-4 w-full max-w-6xl px-4">
          {Array.isArray(currentPageData) &&
            currentPageData.map((asset) => (
              <div
                key={asset.id}
                className="flex flex-col md:flex-row items-start p-6 rounded-lg overflow-hidden bg-slate-50 border border-sumod-bl3 shadow-md"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={asset.picture}
                    alt={asset.name}
                    className="rounded-lg object-cover w-full h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] mx-auto"
                  />
                </div>

                <div className="flex flex-col justify-between text-left md:w-[calc(100%-250px)]">
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-2xl font-semibold mb-4">{asset.name}</h2>
                    <p className="font-light mb-6 whitespace-pre-wrap text-gray-700">{asset.description}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg tracking-wider hover:bg-orange-600 transition-colors"
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
                      onClick={() => setShowModal(true)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mb-4">
        {currentPage > 3 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            &lt;
          </button>
        )}

        {Array.from({ length: 5 }, (_, index) => {
          const pageNumber = Math.max(1, currentPage - 2) + index;
          if (pageNumber <= totalPages) {
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNumber ? "bg-sumod-bl3 text-white" : "bg-gray-200"
                }`}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}

        {currentPage < totalPages - 2 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            &gt;
          </button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96 space-y-4">
            <h3 className="text-xl font-semibold">Delete Artikel</h3>
            <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
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
              <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => setShowModal(false)}>
                Batal
              </button>
              <button className="bg-sidebar text-white px-4 py-2 rounded" onClick={handleDelete} disabled={btnLoading}>
                {btnLoading ? <BallTriangle className="h-7 w-7" /> : "Hapus Artikel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-0">
          <div className="max-h-screen p-6 w-full xl:w-1/2 overflow-y-auto rounded-custom-br">
            <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg max-w-full overflow-y-auto">
              <h2 className="font-semibold mb-4">Update Artikel: "{selectedAsset.name}"</h2>
              <p className="text-custom-black/40 font-bold">Judul</p>
              <input
                type="text"
                placeholder="Judul Baru"
                value={newData.name}
                onChange={(e) => {
                  setNewData({ ...newData, name: e.target.value });
                  if (nameError) setNameError("");
                }}
                className="border p-2 w-full"
              />
              {nameError && <div className="text-red-500 font-semibold text-sm mb-4">{nameError}</div>}
              <p className="text-custom-black/40 font-bold mt-2">Deskripsi</p>
              <textarea
                id="description"
                placeholder="Deskripsi Baru (tambahkan keunggulan di sini)"
                value={newData.description}
                onChange={(e) => {
                  setNewData({ ...newData, description: e.target.value });
                  if (descError) setDescError("");
                }}
                className="border p-2 w-full h-40"
              ></textarea>
              {descError && <div className="text-red-500 font-semibold text-sm mb-4">{descError}</div>}
              <div className="mb-3 flex justify-center">
                <button onClick={handleBulletPoint} className="border border-gray-300 p-2 rounded mr-2">
                  <ListBulletIcon className="h-5 w-5 text-custom-black" />
                </button>
              </div>
              <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 w-full mt-2" />
              {pictError && <div className="text-red-500 font-semibold text-sm mb-4">{pictError}</div>}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  className="bg-sidebar text-white px-4 py-2 rounded"
                  onClick={() => handleUpdate(selectedAsset.id)}
                  disabled={btnLoading}
                >
                  {btnLoading ? <BallTriangle className="h-7 w-7" /> : "Simpan Perubahan"}
                </button>

                <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={resetForm}>
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

export default AdminArtikel;
