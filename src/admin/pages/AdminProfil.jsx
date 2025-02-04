import React, { useEffect, useState } from "react";
import { fetchData, updateData } from "../api/apiService";
import { toast } from "react-toastify";
import TabProfile from "../components/TabProfile";
import PopupUpdate from "../components/PopupUpdate";

const AdminProfil = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newData, setNewData] = useState({ name: "", description: "", picture: null });
  const [nameError, setNameError] = useState("");
  const [descError, setDescError] = useState("");
  const [pictError, setPictError] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchData("product");
      setProducts(
        response.map((product) => ({
          ...product,
          description: product.description || "",
        }))
      );
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
      const updatedProduct = await updateData("product", id, formData);
      toast.dismiss();
      toast.success(`Profil ${updatedProduct.name} berhasil diupdate!`);
      setSelectedProduct(null);
      setNewData({ name: "", description: "", picture: null });
      loadProducts();
      setBtnLoading(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Gagal mengupdate profil: " + (err.response?.data?.message || err.message));
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
    if (!description) return { __html: "" };

    let formattedText = description.replace(/\n/g, "<span class='block mb-2'></span>");

    formattedText = formattedText.replace(
      /\[\[highlight\]\](.*?)\[\[\/highlight\]\]/g,
      '<span class="bg-emerald-100 font-semibold text-custom-black p-2 inline-block rounded-custom-br">$1</span>'
    );

    formattedText = formattedText.replace(/•/g, '<span class="font-bold">•</span>');

    return { __html: formattedText };
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
    setSelectedProduct(null);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p className="flex justify-center items-center">Error: {error}</p>;

  return (
    <div className="mx-auto p-4">
      <TabProfile
        products={products}
        renderFormattedDescription={renderFormattedDescription}
        setSelectedProduct={setSelectedProduct}
        setNewData={setNewData}
      />

      <PopupUpdate
        selectedProduct={selectedProduct}
        newData={newData}
        setNewData={setNewData}
        nameError={nameError}
        setNameError={setNameError}
        descError={descError}
        setDescError={setDescError}
        pictError={pictError}
        handleBulletPoint={handleBulletPoint}
        handleHighlight={handleHighlight}
        handleFileChange={handleFileChange}
        handleUpdate={handleUpdate}
        btnLoading={btnLoading}
        resetForm={resetForm}
        renderFormattedDescription={renderFormattedDescription}
      />
    </div>
  );
};

export default AdminProfil;
