// https://developer.mozilla.org/zh-CN/docs/Web/API/Storage
class Cache {
  get = (key: string) => {
    let result = localStorage.getItem(key) ? localStorage.getItem(key) : false
    if (!result) {
      return result
    }
    try {
      // 尝试把所有取出的值都当json字符串转换
      JSON.parse(result)
    } catch (e) {
      return result
    }
    return JSON.parse(result)
  }
  set = (key: string, value: any) => {
    if (value instanceof Array || value instanceof Object) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    return localStorage.setItem(key, value);
  }
  del = (key: string) => {
    localStorage.removeItem(key);
  }
  clear = () => {
    localStorage.clear()
  }
}

export const cache = new Cache();

export default {
  install: (Vue: any) => {
    Vue.config.globalProperties.$cache = cache
  }
}
