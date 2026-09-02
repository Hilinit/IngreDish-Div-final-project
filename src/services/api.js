import axios from "axios";

const api = axios.create({
  baseURL: "https://69c53df08a5b6e2dec2c09e9.mockapi.io/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;