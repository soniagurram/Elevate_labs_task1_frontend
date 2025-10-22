import axios from "axios";

// Update this to your FastAPI backend URL
const BASE_URL = "https://elevate-labs-task1.onrender.com";
export const getEmployees = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/employees/`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createEmployee = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/employees/`, data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateEmployee = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/employees/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/employees/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
