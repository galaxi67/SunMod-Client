import React, { useEffect, useState } from "react";
import { fetchData, updateData } from "../api";

const AdminProfil = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newData, setNewData] = useState({ name: "", description: "", picture: null });

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchData("product");
      console.log(response);
      setProducts(response);
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

      const updatedProduct = await updateData("product", id, formData);
      alert(`Profil ${updatedProduct.name} berhasil diupdate!`);
      setSelectedProduct(null);
      setNewData({ name: "", description: "", picture: null });
      loadProducts();
    } catch (err) {
      alert("Gagal mengupdate profil: " + (err.response?.data?.message || err.message));
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profil Sumod</h1>
      <div className="flex justify-center md:justify-start lg:justify-start xl:justify-start">
        {Array.isArray(products) &&
          products
            .filter((product) => product.id === 1)
            .map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-[250px] h-auto"
              >
                <img
                  src={product.picture}
                  alt={product.name}
                  className="rounded-custom-br object-cover mb-2 mx-auto"
                />
                <div>
                  <h2 className="text-xl font-semibold text-center">{product.name}</h2>
                  <p className="text-gray-700 text-center">{product.description}</p>
                  <div className="text-center mt-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-custom-br"
                      onClick={() => {
                        setSelectedProduct(product);
                        setNewData({
                          name: product.name,
                          description: product.description,
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

      <div className="w-full my-10">
        <div className="border-t-2 border-black mb-2"></div>
        <div className="border-t-2 border-black mt-2"></div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Kenapa harus di Sumod?</h1>
      <div className="flex justify-center md:justify-normal lg:justify-normal xl:justify-normal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {Array.isArray(products) &&
            products
              .filter((product) => product.id !== 1)
              .map((product) => (
                <div
                  key={product.id}
                  className={`p-4 rounded-custom-br overflow-hidden shadow-lg w-[250px] h-auto ${
                    product.id >= 2 && product.id <= 7 ? "bg-slate-50" : "bg-red-200"
                  }`}
                >
                  <img
                    src={product.picture}
                    alt={product.name}
                    className="object-cover p-2 rounded-custom-br bg-slate-100 mb-2 mx-auto"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-center">{product.name}</h2>
                    <p className="text-gray-700 text-center">{product.description}</p>
                    <div className="text-center mt-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-custom-br"
                        onClick={() => {
                          setSelectedProduct(product);
                          setNewData({
                            name: product.name,
                            description: product.description,
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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update profil: {selectedProduct.name}</h2>
            <input
              type="text"
              placeholder="Judul Baru"
              value={newData.name}
              onChange={(e) => setNewData({ ...newData, name: e.target.value })}
              className="border p-2 w-full mt-2"
            />
            <textarea
              placeholder="Deskripsi Baru"
              value={newData.description}
              onChange={(e) => setNewData({ ...newData, description: e.target.value })}
              className="border p-2 w-full mt-2"
            ></textarea>
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
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleUpdate(selectedProduct.id)}
              >
                Simpan Perubahan
              </button>

              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setSelectedProduct(null)}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfil;
