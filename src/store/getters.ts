export default {
  /**
   * 获取 axios 配置
   * @param {object} state
   * @param {string} type
   * @return {object}
   */
  // eslint-disable-next-line
  getAxiosEnv: (state: any): object => {
    return (type: string) => {
      let data = state.axiosEnv[type] ? state.axiosEnv[type] : state.axiosEnv.default
      if (!data) {
        return {
          baseURL: 'http://192.168.20.6:80',
          timeout: 3000,
          withCredentials: true
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'Access-Control-Allow-Methods': '*',
          //   'Access-Control-Allow-Headers': '*'
          //   // 'Content-Type': 'application/json;charset=utf-8'
          // }
        }
      }
      return data
    }
  },
  getUserAgent: () => {
    return () => {
      let ua = navigator.userAgent
      if (!ua) {
        ua = ''
      }
      return ua;
      // 发送 临时凭证 给用户 -> 用户保存
      // 请求刷新验证码 -> 发送 临时凭证 给服务器 -> 返回 验证码 
    }
  }
}
