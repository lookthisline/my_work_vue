export default {
  axiosEnv: {
    //  NOTE: 此处已弃用，仅作为记录store如何使用
    development: {
      baseURL: '//localhost:8001',
      timeout: 3000,
      withCredentials: true
    },
    debug: {
      baseURL: '//localhost:8001',
      timeout: 3000,
      withCredentials: true
    },
    production: {
      baseURL: '//localhost:8001',
      timeout: 3000,
      withCredentials: true
    },
    default: {
      baseURL: '//localhost:8001',
      timeout: 3000,
      withCredentials: true
    }
  }
};
