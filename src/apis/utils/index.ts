import axios, { CreateAxiosDefaults } from 'axios';

// const BASE_URL = 'https://port-0-mini-backend-develop-1aac2alg6v5osh.sel3.cloudtype.app/';
const BASE_URL = 'http://10.19.237.50:8080/';

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url: string, options: CreateAxiosDefaults<any> | undefined) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string, options: CreateAxiosDefaults<any> | undefined) => {
  const token = '토큰 값';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL, undefined);
export const authInstance = axiosAuthApi(BASE_URL, undefined);
