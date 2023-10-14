import axios from "axios";

// set base url
const api = axios.create({
  baseURL: "/api",
});

export default api;
