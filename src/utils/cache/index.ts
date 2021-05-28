// https://developer.mozilla.org/zh-CN/docs/Web/API/Storage
import { App } from 'vue';
class Cache {
  get = (key: string): string | object | null | boolean => {
    const result = localStorage.getItem(key)
      ? localStorage.getItem(key)
      : false;
    if (!result) {
      return result;
    }
    try {
      // 尝试把所有取出的值都当 json 字符串转换
      JSON.parse(result);
    } catch (e) {
      return result;
    }
    return JSON.parse(result);
  };

  set = <T>(key: string, value: string | Array<T> | object): void => {
    if (value instanceof Array || value instanceof Object) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    localStorage.setItem(key, value);
  };

  del = (key: string): void => {
    localStorage.removeItem(key);
  };

  clear = (): void => {
    localStorage.clear();
  };
}

export const cache = new Cache();

export default {
  install: (app: App): void => {
    app.config.globalProperties.$cache = cache;
  }
};
