import axios from 'axios'

const service = axios.create({
  baseURL: "",
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(config => {

}, error => {
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