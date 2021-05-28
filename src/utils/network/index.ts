import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isObject, isSet } from '@/utils/common/function';
import qs from 'qs';
import { App } from 'vue';

// NOTE: 此处弃用
// 从 VueX 获取配置
// const axiosEnv = store.getters.getAxiosEnv(process.env.NODE_ENV)

// 默认配置
const config = {
  // 从环境配置加载baseUrl
  baseURL: process.env.VUE_APP_BASE_API || '//localhost',
  timeout: process.env.VUE_APP_TIME_OUT || 1500
  // withCredentials: false,
  // headers: {
  //   'Contrnt-type': 'application/json;charset=utf-8'
  // }
};

// 定义错误方法
const errorFunc = (msg: string) => {
  console.error(msg);
};

// NOTE: 此处弃用
// axios 实例，此处合并配置
// export const instance = axios.create({ ...config, ...axiosEnv })

export const instance = axios.create(config);

// 定义 axios 请求（request）拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // NOTE: 在 get 请求前对参数进行格式转换
    if (config.method === 'get' && isSet(config.params)) {
      config.transformRequest = [
        data => {
          if (!data) {
            return;
          }
          let params = '';
          // 遍历数据，拼接字符串
          for (const k in data) {
            // FIXME: 等待梳理此处逻辑
            // if (data.hasOwnProperty(k) === true) {
            if (Object.prototype.hasOwnProperty.call(data, k) === true) {
              params +=
                encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
              // params += encodeURIComponent(k + '=' + data[k]) + '&'
            }
          }
          return params;
        }
      ];
    }
    // NOTE: 在 post 请求前对传参进行格式转换
    if (config.method === 'post') {
      config.transformRequest = [
        data => {
          if (!data) {
            return;
          }
          const formData = new FormData();
          Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
          });
          return formData;
        }
      ];
    }
    // NOTE: 在 delete 请求前对传参进行格式转换
    if (config.method === 'delete') {
      config.transformRequest = [
        data => {
          if (!data) {
            return;
          }
          if (isObject(data)) {
            return qs.stringify(data);
          }
          return data;
        }
      ];
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 定义 axios 响应（response）拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 定义获取到数据响应时如何处理
    if (!response.data.status) {
      // 后端返回错误信息
      return Promise.reject(response.data);
    }
    return response.data;
  },
  error => {
    // 服务器未启动，无法得到任何响应
    if (error.response === undefined) {
      errorFunc(error.message);
      return Promise.reject(error);
    }
    const httpCode = error.response.status;
    errorFunc('http response code: ' + httpCode);
    return Promise.reject(error);
  }
);

export default {
  install: (app: App): void => {
    app.config.globalProperties.$request = instance;
  },
  instance
};
