// src/config/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 👈 comes from .env
  timeout: 10000, // optional
});

export default api;
