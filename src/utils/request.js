import axios from 'axios'
import router from '@/router'
// import cookieHandler from './cookieHandler';
import { getToken, setToken } from '@/utils/cookies'

const DEV_HOST = 'http://localhost:3001/'
const BUILD_HOST = '/'
const API_HOST = process.env.NODE_ENV === 'production' ? BUILD_HOST : DEV_HOST

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 3000
})

/**
 * 拦截请求，设置token
 */
instance.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = token // eslint-disable-line no-param-reassign
  }
  return config;
}, error =>
  // 请求出错
  Promise.reject(error),
);

/**
 * 拦截响应，处理响应结果
 */
instance.interceptors.response.use((data) => {
  if (data.status === 200 || data.status === 304) {
    // 200 正常响应, 304取缓存
    // data.data 为服务器返回的消息体Object
    if (data.data) {
      return data.data;
    }
    return Promise.reject('服务端数据结构出错');
  }
  return data.data;
}, (error) => {
  // error handler由后端控制
  if (error && error.response && error.response.status && error.response.data) {
    const errResponse = {
      code: error.response.status,
      data: error.response.data.data,
      message: error.response.data.message,
    };
    return Promise.reject(errResponse);
  }
  return Promise.reject('undefined error');
});

export default instance
