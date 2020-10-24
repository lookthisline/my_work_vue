import store from '@/store'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 从 VueX 获取配置
const axiosEnv = store.getters.getAxiosEnv(process.env.NODE_ENV)

// 错误方法
const errorFunc = (msg: string) => { console.error(msg) }

// axios 实例
const instance = axios.create(axiosEnv)

// 定义 axios 请求（request）拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在 get 请求前拼接参数
    if (config.method === 'get') {
      config.transformRequest = [(data) => {
        if (!data) {
          return
        }
        let params = '';
        for (let k in data) {
          if (data.hasOwnProperty(k) === true) {
            params += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
          }
        }
        return params;
      }]
    }
    // 在 post 请求前对传参进行格式转换
    if (config.method === 'post') {
      config.transformRequest = [(data) => {
        if (!data) {
          return
        }
        let formData = new FormData()
        Object.keys(data).forEach(key => {
          formData.append(key, data[key])
        })
        return formData;
      }]
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 定义 axios 响应（response）拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 定义获取到数据响应时如何处理
    if (!response.data.status) {
      // 后端返回错误信息
      return Promise.reject(response.data);
    }
    return response.data
  },
  error => {
    // 服务器未启动，无法得到任何响应
    if (error.response === undefined) {
      errorFunc(error.message)
      return Promise.reject(error)
    }
    const http_code = error.response.status
    errorFunc('http response code: ' + http_code)
    return Promise.reject(error)
  }
)

export default {
  install: (Vue: any): void => {
    Vue.config.globalProperties.$request = instance
  }
}
