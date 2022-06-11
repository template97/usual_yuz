import axios, { CancelToken } from 'axios';

export type AxiosMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

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

export const addQueryParam = <T extends {}>(url: string, params: { [key: string]: any }) => {
  const hasQueryAlready = url.includes('?');

  const keys = Object.keys(params);
  keys
    .filter((key) => !!params[key])
    .forEach((key, i) => {
      if (!hasQueryAlready && i === 0) url += `?${key}=${params[key]}`;
      else url += `&${key}=${params[key]}`;
    });
  return url;
};
