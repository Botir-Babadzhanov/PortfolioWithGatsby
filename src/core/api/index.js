import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://donate-3hcz.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
