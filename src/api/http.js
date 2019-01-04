import axios from 'axios';
import router from '@/router';
import cookieHandler from '../utils/cookieHandler';

const DEV_HOST = 'http://localhost:3001/';
const BUILD_HOST = 'api/';
const API_HOST = process.env.NODE_ENV === 'production' ? BUILD_HOST : DEV_HOST;


// use cookie
// axios.defaults.withCredentials = true;
// default baseUrl
axios.defaults.baseURL = API_HOST;
// timeout
axios.defaults.timeout = 30000;

/**
 * 拦截请求，设置token
 */
axios.interceptors.request.use((config) => {
  const token = cookieHandler.get('TOKEN');
  if (token) {
    if (router.history.current.name !== 'login') {
      config.headers.Authorization = token; // eslint-disable-line no-param-reassign
    }
  }
  return config;
}, error =>
  // 请求出错
  Promise.reject(error),
);

/**
 * 拦截响应，处理响应
 */
axios.interceptors.response.use((data) => {
  if (data.status === 200 || data.status === 304) {
    // 200 正常响应, 304取缓存
    // data.data 为服务器返回的消息体Object
    if (data.data) {
      return data.data;
    }
    return Promise.reject('服务器数据错误');
  }
  return data.data.data;
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

// 替换请求{}中的参数
function replaceUrlParams(url, params) {
  const api = url.split('?');
  let apiUrl = api[0];

  if (params !== null && params !== undefined) {
    Object.keys(params).forEach((key) => {
      apiUrl = apiUrl.replace(`{${key}}`, encodeURIComponent(params[key]));
    });
  }

  return apiUrl;
}

// ------------------------------------------//
// ====== http method in this system =======//
// ------------------------------------------//

// axios#get(url[, config])
export const $get = (url, param) => {
  const totalUrl = replaceUrlParams(url, param);
  return axios.get(totalUrl, { params: param });
};

// axios#post(url[, data[, config]])
export const $post = (url, body, param) => {
  const totalUrl = replaceUrlParams(url, param);
  return axios.post(totalUrl, body, { params: param });
};

// axios#put(url[, data[, config]])
export const $put = (url, body, param) => {
  const totalUrl = replaceUrlParams(url, param);
  return axios.put(totalUrl, body, { params: param });
};

// axios#delete(url[, config])
export const $delete = (url, param) => {
  const totalUrl = replaceUrlParams(url, param);
  return axios.delete(totalUrl, { params: param });
};
