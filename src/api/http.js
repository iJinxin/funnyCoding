import axios from 'axios';
import router from '@/router';
import cookieHandler from '../utils/cookieHandler';

const DEV_HOST = 'http://172.16.31.88:80/api';
const BUILD_HOST = 'api/';
const API_HOST = process.env.NODE_ENV === 'production' ? BUILD_HOST : DEV_HOST;


// use cookie
axios.defaults.withCredentials = true;
// default baseUrl
axios.defaults.baseURL = API_HOST;
// timeout
axios.defaults.timeout = 30000;

/**
 * 拦截请求，设置token
 */
axios.interceptors.request.use(config => {
  const token = cookieHandler.get('TOKEN');
  if (token) {
    if (router.history.current.name !== 'login') {
      config.headers.Authorization = token;
    }
  }
  return config;
}, error => {
  // 请求出错
  return Promise.reject(error);
});

/**
 * 拦截响应，处理响应
 */
axios.interceptors.response.use(data => {
  if (data.status === 200 || data.status === 304) {
    // 200 正常响应, 304取缓存
    // data.data 为服务器返回的消息体Object
    if (data.data) {
      return data.data.data
    } else {
      return Promise.reject("服务器数据错误");
    }
  }
  return data.data.data;
}, error => {
  let errMsg = '';
  if (error && error.response && error.response.status) {
    switch (error.response.status) {
      case 400:
        errMsg = '请求错误';
        break;
      case 401:
        errMsg = '授权失败，请重新登录';
        cookieHandler.logout();
        // router go login
        break;
      case 403:
        errMsg = '服务器拒绝访问';
        break;
      case 404:
        errMsg = `请求地址错误: ${error.response.config.url}`;
        break;
      case 408:
        errMsg = '请求超时';
        break;
      case 500:
        errMsg = error.response.data.data.msg;
        break;
      case 501:
        errMsg = '服务器无法识别';
        break;
      case 502:
        errMsg = '网关错误';
        break;
      case 503:
        errMsg = '服务错误';
        break;
      case 504:
        errMsg = '网关超时';
        break;
      case 505:
        errMsg = 'HTTP版本不支持';
        break;
      default:
    }
  }
  return Promise.reject(errMsg);
});

// 替换请求{}中的参数
function replaceUrlParams(url, params) {
  let api = url.split("?");
  let apiUrl = api[0];

  for(var i in params) {
    apiUrl = apiUrl.replace("{" + i + "}", encodeURIComponent(params[i]));
  }

  return apiUrl;
}

// ------------------------------------------//
// ====== http method in this system =======//
// ------------------------------------------//

// axios#get(url[, config])
export const $get = function (url, param) {
  let totalUrl = replaceUrlParams(url, param);
  return axios.get(totalUrl, {params: param});
};

// axios#post(url[, data[, config]])
export const $post = function (url, body, param) {
  let totalUrl = replaceUrlParams(url, param);
  return axios.post(totalUrl, body, {params: param});
};

// axios#put(url[, data[, config]])
export const $put = function (url, body, param) {
  let totalUrl = replaceUrlParams(url, param);
  return axios.put(totalUrl, body, {params: param});
};

// axios#delete(url[, config])
export const $delete = function (url, param) {
  let totalUrl = replaceUrlParams(url, param);
  return axios.delete(totalUrl, {params: param});
};