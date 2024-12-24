import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response || error.message);
    throw error;
  }
};

export const createProduct = async (formData) => {
  const response = await axios.post(`${BASE_URL}/product`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateProduct = async (id, formData) => {
  const response = await axios.put(`${BASE_URL}/product/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BASE_URL}/product/${id}`);
  return response.data;
};
