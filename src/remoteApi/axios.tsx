import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_APP_REMOTE_API_URL}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    // Authorization: `Bearer  ${token}`
  },
});

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization =  token ? `Bearer ${token}` : '';
//   return config;
// });

// export const get_expenses_under_activity = (id, token) => {
//   return axiosInstance.get(`${baseURL}/expense/${id}`,
//     {
//       headers: { Authorization: `Bearer ${token}` }
//     });
// }