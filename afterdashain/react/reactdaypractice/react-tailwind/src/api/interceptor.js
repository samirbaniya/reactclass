import axios from "axios";

export const axiosWithAuth = axios.create();
export const basicAxios = axios.create();

axiosWithAuth.interceptors.request.use((config) => {
  const token = "Bearer " + localStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});

function axiosFulfilled(e) {
  return e.data;
}
function axiosRejected(e) {
  if (e.response) {
    if (e.response.status === 404) {
      return Promise.reject(e.response.data);
    }
    if (e.response.status === 500) {
      return Promise.reject(e.response.data);
    }
    if (e.response.status === 401 || e.response.status === 403) {
      localStorage.removeItem("token");
      location.reload();
      return Promise.reject(e.response.data);
    }
    return e.response.data;
  }
  return Promise.reject("Something went wrong!!!");
}

basicAxios.interceptors.response.use(axiosFulfilled, axiosRejected);
axiosWithAuth.interceptors.response.use(axiosFulfilled, axiosRejected);
