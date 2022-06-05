import axios, { CancelToken } from 'axios';

type AxiosMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

// const token = 'RGAPI-aaa7a2f9-0a34-46bd-863b-2bd7fd850648';
// const headers = { Authorization: `${token}` };
const headers = {};

export const axiosRequest = (method: AxiosMethod, url: string, data?: any, cancelToken?: CancelToken) => {
  switch (method) {
    case 'GET':
      return axios.get(url, {
        cancelToken,
        headers,
      });
    case 'POST':
      return axios.post(url, data, {
        headers,
        cancelToken,
      });
    case 'PATCH':
      return axios.patch(url, data, {
        headers,
        cancelToken,
      });
    case 'DELETE':
      return axios.delete(url, {
        headers,
        cancelToken,
        data,
      });
  }
};