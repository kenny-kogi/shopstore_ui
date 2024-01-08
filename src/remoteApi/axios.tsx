import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_APP_REMOTE_API_URL}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const get_all_products = (token: String) => {
  return axiosInstance.get(`${baseURL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
