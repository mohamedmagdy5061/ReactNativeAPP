import axios from 'axios';

let axiosInstance = axios.create({});
axiosInstance.defaults.timeout = 10000;

export function overWriteAxiosConfigurations(baseUrl = '', timeout = 10000) {
  axiosInstance.defaults.timeout = timeout;
  axiosInstance.defaults.baseURL = baseUrl;
}

axiosInstance.interceptors.request.use(function (config) {
//   config.headers['x-user-token'] = 'cookies("hubToken")';
  config.headers['Authorization'] = 'Bearer fj9EPdrdS2IVqHz6U_78AO-7Oa2TR8-ehNazqK6Nd_f-PzFWLA1bR6Yen1TI0hrKjNlZMcrSgUPa4FA9VYAluNEaoaN6yxJWrhRbNS2Rt-XhoguERccJqGc1pAmGXnYx';
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
    //   window.localStorage.clear();
        console.log("pad request 401 or error")
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;