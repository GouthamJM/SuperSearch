import axios from 'axios';

export const COVALENT_API = 'https://api.covalenthq.com/v1/';
export const COVALENT_API_KEY = 'cqt_rQQMpWRp9kKyrxQGMK6w7HHXxHgH';

//@ts-ignore
function axiosInstanceCreator(baseURL) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.baseURL = baseURL;
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      if (response.status >= 200 && response.status <= 299) {
        return response;
      } else {
        return Promise.reject(response);
      }
    },

    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

const covalentInstance = axiosInstanceCreator(COVALENT_API);

export const API_INSTANCES = {
  covalent: covalentInstance,
};
export default API_INSTANCES;
