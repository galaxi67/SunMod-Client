import React, { useState, useEffect } from "react";
import { fetchData, updateData } from "../api";
import { ListBulletIcon, PencilIcon } from "@heroicons/react/24/outline";

const AdminMetode = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [newData, setNewData] = useState({ name: "", description: "", picture: null });

  const loadAssets = async () => {
    setLoading(true);
    try {
      const response = await fetchData("method");
      setAssets(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    if (!newData.name.trim() || !newData.description.trim()) {
      alert("Nama dan deskripsi tidak boleh kosong.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newData.name);
      formData.append("description", newData.description);
      if (newData.picture) {
        formData.append("picture", newData.picture);
      }

      const updatedAsset = await updateData("method", id, formData);
      alert(`Metode ${updatedAsset.name} berhasil diupdate!`);
      setSelectedAsset(null);
      setNewData({ name: "", description: "", picture: null });
      loadAssets();
    } catch (err) {
      alert("Gagal mengupdate metode: " + (err.response?.data?.message || err.message));
    }
  };

  const handleBulletPoint = () => {
    const selectedText = window.getSelection().toString();

    if (selectedText.trim()) {
      const bulletText = `<span class='bg-emerald-100 font-semibold text-custom-black'>• ${selectedText}</span>`;
      document.execCommand("insertHTML", false, bulletText);
    } else {
      document.execCommand(
        "insertHTML",
        false,
        `<span class='bg-emerald-100 font-semibold text-custom-black'>• </span>`
      );
    }
  };

  const handleHighlight = () => {
    const selectedText = window.getSelection().toString();
    if (!selectedText) {
      alert("Pilih teks yang ingin di-highlight.");
      return;
    }

    const highlightedText = `[[highlight]]${selectedText}[[/highlight]]`;
    const updatedDescription = newData.description.replace(selectedText, highlightedText);
    setNewData({ ...newData, description: updatedDescription });
  };

  const renderFormattedDescription = (description) => {
    let formattedText = description.replace(/\n/g, "<span class='block mb-2'></span>");

    formattedText = formattedText.replace(
      /\[\[highlight\]\](.*?)\[\[\/highlight\]\]/g,
      '<span class="bg-emerald-100 font-semibold text-custom-black p-2 inline-block rounded-custom-br">$1</span>'
    );

    formattedText = formattedText.replace(/•/g, '<span class="font-bold">•</span>');

    return { __html: formattedText };
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
                className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-[325px] md:w-[350px] lg:w-[325px] xl:w-[380px] h-auto"
              >
                <img src={asset.picture} alt={asset.name} className="rounded-custom-br object-cover mb-2 mx-auto" />
                <div>
                  <h2 className="text-xl font-semibold text-center my-3">{asset.name}</h2>
                  <p
                    className="font-light text-justify mb-4 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={renderFormattedDescription(asset.description)}
                  ></p>
                  <div className="text-center mt-4">
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-custom-br tracking-wider"
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-2 md:m-0">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="font-semibold mb-4">Update Metode: "{selectedAsset.name}"</h2>
              <p className="text-custom-black/40 font-bold">Judul</p>
              <input
                type="text"
                placeholder="Judul Baru"
                value={newData.name}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                className="border p-2 w-full"
              />
              <p className="text-custom-black/40 font-bold mt-2">Deskripsi</p>
              <textarea
                id="description"
                placeholder="Deskripsi Baru (tambahkan keunggulan di sini)"
                value={newData.description}
                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                className="border p-2 w-full h-40"
              ></textarea>
              <div className="mb-3 flex justify-center">
                <button onClick={handleBulletPoint} className="border border-gray-300 p-2 rounded mr-2">
                  <ListBulletIcon className="h-5 w-5 text-custom-black" />
                </button>

                <button onClick={handleHighlight} className="border border-gray-300 p-2 rounded ">
                  <PencilIcon className="h-5 w-5 text-emerald-600" />
                </button>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.size <= 5 * 1024 * 1024) {
                    setNewData({ ...newData, picture: file });
                  } else {
                    alert("Ukuran file maksimal 5MB.");
                  }
                }}
                className="border p-2 w-full mt-2"
              />
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  className="bg-sidebar text-white px-4 py-2 rounded"
                  onClick={() => handleUpdate(selectedAsset.id)}
                >
                  Simpan Perubahan
                </button>

                <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={() => setSelectedAsset(null)}>
                  Batal
                </button>
              </div>
            </div>
            <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="font-semibold">Preview Deskripsi:</h3>
              <div
                className="border p-2 w-full mt-2 h-auto bg-slate-50 max-h-[100px] md:max-h-[450px] overflow-y-auto"
                dangerouslySetInnerHTML={renderFormattedDescription(newData.description)}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMetode;
