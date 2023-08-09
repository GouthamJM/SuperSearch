import API_INSTANCES, { COVALENT_API_KEY } from './httpInterceptor';

const axiosInstance = API_INSTANCES.covalent;

export const globalGetService = (
  url,
  params = {},
  instance = API_INSTANCES.covalent
) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'GET',
      url: url,
      params: { ...params, key: COVALENT_API_KEY },
    })
      .then((response) => {
        const _response = {
          data: response.data.data,
          statusCode: response.status,
          message: response.statusText,
        };

        resolve(_response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalApiService = (
  url,
  data,
  method,
  instance = API_INSTANCES.covalent
) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: method,
      url: url,
      data: data,
    })
      .then((response) => {
        const _response = {
          data: response.data.data,
          statusCode: response.status,
          message: response.statusText,
        };
        resolve(_response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
