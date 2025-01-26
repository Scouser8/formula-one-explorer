import axs, { AxiosInstance } from "axios";

const axios: AxiosInstance = axs.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axios;
