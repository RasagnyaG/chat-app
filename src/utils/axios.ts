import axios from "axios";

// configure status codes for axios
const api = axios.create({
  baseURL: "/api",
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Treat 4xx status codes as non-errors
  },
});

export default api;
