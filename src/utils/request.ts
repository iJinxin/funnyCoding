import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const baseConfig: AxiosRequestConfig = {
  baseURL: "",
  timeout: 5000
}
const service: AxiosInstance = axios.create(baseConfig);

// request interceptor
service.interceptors.request.use(config => {
  // config.headers['x-projectkey'] = 1234
  return config
}, (error: any) => {
  return Promise.reject(error);
});

// response interceptor
service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code == '200') {
    return res;
  } else {
    return Promise.reject(res.message);
  }
}, error => {
  return Promise.reject(error);
})

export default service;