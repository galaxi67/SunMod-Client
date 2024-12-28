import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchData = async (tableName) => {
  try {
    const response = await axios.get(`${BASE_URL}/${tableName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${tableName}:`, error.response || error.message);
    throw error;
  }
};

export const updateData = async (tableName, id, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${tableName}/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating data in ${tableName}:`, error.response || error.message);
    throw error;
  }
};

