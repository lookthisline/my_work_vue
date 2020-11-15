import store from '@/store'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { isObject } from '@/utils/common/function'
import qs from 'qs'
import { App } from 'vue'

// 从 VueX 获取配置
const axiosEnv = store.getters.getAxiosEnv(process.env.NODE_ENV)

// 错误方法
const errorFunc = (msg: string) => { console.error(msg) }

// axios 实例
const instance = axios.create(axiosEnv)

// 定义 axios 请求（request）拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在 delete 请求前拼接参数
    if (config.method === 'delete') {
      config.transformRequest = [(data) => {
        if (!data) {
          return
        }
        if (isObject(data)) {
          return qs.stringify(data)
        }
        return data
      }]
    }

    // 在 get 请求前拼接参数
    if (config.method === 'get') {
      config.transformRequest = [(data) => {
        if (!data) {
          return
        }
        let params = ''
        for (const k in data) {
          // if (data.hasOwnProperty(k) === true) {
          if (Object.prototype.hasOwnProperty.call(data, k) === true) {
            params += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
          }
        }
        return params
      }]
    }

    // 在 post 请求前对传参进行格式转换
    if (config.method === 'post') {
      config.transformRequest = [(data) => {
        if (!data) {
          return
        }
        const formData = new FormData()
        Object.keys(data).forEach(key => {
          formData.append(key, data[key])
        })
        return formData
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
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    // 服务器未启动，无法得到任何响应
    if (error.response === undefined) {
      errorFunc(error.message)
      return Promise.reject(error)
    }
    const httpCode = error.response.status
    errorFunc('http response code: ' + httpCode)
    return Promise.reject(error)
  }
)

export default {
  install: (Vue: App): void => {
    Vue.config.globalProperties.$request = instance
  }
}
