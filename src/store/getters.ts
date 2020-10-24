export default {
  /**
   * 获取 axios 配置
   * @param {object} state
   * @param {string} type
   * @return {object}
   */
  getAxiosEnv: (state: any): object => {
    return (type: string) => {
      let data = state.axiosEnv[type] ? state.axiosEnv[type] : state.axiosEnv.default
      if (!data) {
        return {
          baseURL: 'https://localhost:80',
          timeout: 3000,
          withCredentials: true
        }
      }
      return data
    }
  }
}
